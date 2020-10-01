

// var Info = {
//     container : document.getElementById("hamburgerContainer"),
//     width : Info.container,
// };

// console.log(Info);

function hamburgerMaker(hamburgerName, containerName, checkBoxName, forCheckBoxName, labelName, lineName){
    this.containerToAppend = document.getElementById("mainContainer");
    this.hamburgerName = hamburgerName;
    this.containerName = hamburgerName + containerName ;
    this.checkBoxName = hamburgerName + checkBoxName;
    this.forCheckBoxName = hamburgerName + forCheckBoxName;
    this.labelName = hamburgerName + labelName ;
    this.lineName = hamburgerName + lineName ;

    this.container;
    this.checkBox;
    this.label;
    this.line;

    this.generatedKeyframes = "";

    this.buildElements = function(){
        this.container = document.createElement("div");
        this.container.setAttribute("id", this.containerName);
        this.containerToAppend.appendChild(this.container);

        this.checkBox = document.createElement("input");
        this.checkBox.type = "checkbox";
        this.checkBox.setAttribute("id", this.checkBoxName);
        this.container.appendChild(this.checkBox);

        this.label = document.createElement("label");
        this.label.htmlFor = this.checkBoxName;
        this.label.setAttribute("id", this.labelName);
        this.container.appendChild(this.label);

        for(i = 0; i < 3; i++){
            this.line = document.createElement("span");
            this.line.setAttribute("class", this.lineName);
            this.label.appendChild(this.line);
        }
    };

    this.setContainerStyle = function(element){
        let el = element.style; 
        el.width = "300px";
        el.height = "300px";
        el.backgroundColor = "grey";
        el.position = "relative";
        el.display = "flex";
        el.justifyContent = "space-evenly";
        el.alignItems = "center";
        el.flexDirection = "column";
        // console.log(this.container);
    };

    this.setLabelStyle = function(element){
        let el = element.style; 
        el.width = "80%";
        el.height = "80%";
        el.backgroundColor = "cadetblue";
        el.display = "flex";
        el.alignItems = "center";
        el.flexDirection = "column";
        el.cursor = "pointer";
        // console.log(this.label);
    };

    this.setCheckBoxStyle = function(element){
        let el = element.style;
        el.position = "absolute";
        el.visibility = "hidden";
    };

    this.setLineStyle = function(element){
        for(i = 0; i < 3; i++){
        let el = document.getElementsByClassName(this.lineName)[i].style; 
        el.width = "80%";
        el.height = "14%";
        el.marginTop = "14%";
        el.backgroundColor = "white";
        el.position = "relative";
        // console.log(this.line);
        }
    };

    this.generateEmbededHtml = function(){
        let parent = document.getElementById("toCopy");
        let content = this.container;
        let child = document.createTextNode(content.outerHTML + "\n" + "\n");
        parent.appendChild(child);
    };

        this.generateKeyframes = function(state, animationObject){
            let indx = 1;
            let text = "";
            let animLine = this.hamburgerName + state;
            // let defaultLine = this.hamburgerName + "Default";
            
            for(key in animationObject){
                let keyframes = 
                "\n" +
                "@keyframes " + animLine + indx + "{" + "\n" +
                "0%{ transform-origin: " + animationObject[key].zero[0] + "; transform : translate(" + animationObject[key].zero[1] + ", " + animationObject[key].zero[2] + ") rotate(" + animationObject[key].zero[3] + "deg) scale(" + animationObject[key].zero[4] + ");  opacity: " + animationObject[key].zero[5] + ";}" + "\n" +
                "25%{ transform-origin: " + animationObject[key].twentyFive[0] + "; transform : translate(" + animationObject[key].twentyFive[1] + ", " + animationObject[key].twentyFive[2] + ") rotate(" + animationObject[key].twentyFive[3] + "deg) scale(" + animationObject[key].twentyFive[4] + ");  opacity: " + animationObject[key].twentyFive[5] + ";}" + "\n" +
                "50%{ transform-origin: " + animationObject[key].fifty[0] + "; transform : translate(" + animationObject[key].fifty[1] + ", " + animationObject[key].fifty[2] + ") rotate(" + animationObject[key].fifty[3] + "deg) scale(" + animationObject[key].fifty[4] + ");  opacity: " + animationObject[key].fifty[5] + ";}" + "\n" +
                "75%{ transform-origin: " + animationObject[key].seventyFive[0] + "; transform : translate(" + animationObject[key].seventyFive[1] + ", " + animationObject[key].seventyFive[2] + ") rotate(" + animationObject[key].seventyFive[3] + "deg) scale(" + animationObject[key].seventyFive[4] + ");  opacity: " + animationObject[key].seventyFive[5] + ";}" + "\n" +
                "100%{ transform-origin: " + animationObject[key].oneHundred[0] + "; transform : translate(" + animationObject[key].oneHundred[1] + ", " + animationObject[key].oneHundred[2] + ") rotate(" + animationObject[key].oneHundred[3] + "deg) scale(" + animationObject[key].oneHundred[4] + ");  opacity: " + animationObject[key].oneHundred[5] + ";}" + "\n" +
                "}" + "\n"
                ;
                indx ++
                text += keyframes;
                
                
            }

            this.cumulateCss(text);

        };

        this.checkBoxChecked = function(indx, state){
            if(state == "Animate"){
                let animName = this.hamburgerName + state;

                let text = 
                "\n" +
                "#" + this.checkBoxName + ":checked ~ #" + this.labelName + " ." + this.lineName + ":nth-child(" + indx + "){" + "\n" +
                    "animation : " + animName + indx + " .5s forwards;" + "\n" +
                "}" + "\n"
                ;

                this.cumulateCss(text);
            } else{
                let animName = this.hamburgerName + state;
                let text = 
                "\n" +
                "." + this.lineName + ":nth-child(" + indx + "){" + "\n" +
                    "animation: " + animName + indx + " .5s forwards;" + "\n" +
                "}" + "\n" 
                ;
                this.cumulateCss(text);
            }

        };

        this.cumulateCss = function(text){
            this.generatedKeyframes += text;
            // console.log(this.generatedKeyframes);
        };


        this.createStyleTagAndFill = function(){
            let generate = this.generatedKeyframes;
            let styleTag = document.createElement("style");
            let textNode = document.createTextNode(generate);
            styleTag.appendChild(textNode);
            document.head.appendChild(styleTag);
            this.converCssTagToCopy(styleTag);
        };

        this.converCssTagToCopy = function(styleTag){
            // console.log(styleTag);
            let content = styleTag.outerHTML;
            let parent = document.getElementById("toCopy");
            let br = document.createElement("br");
            let br2 = document.createElement("br");
            parent.appendChild(br);
            parent.appendChild(br2);
            parent.textContent += content;
        }



}






let theBullet = new hamburgerMaker("theBullet", "HamburgerContainer", "Toggle", "Toggle", "Label", "Line");
theBullet.buildElements();
theBullet.setContainerStyle(theBullet.container);
theBullet.setLabelStyle(theBullet.label);
theBullet.setCheckBoxStyle(theBullet.checkBox);
theBullet.setLineStyle(theBullet.line);
theBullet.generateEmbededHtml();

let theBulletAnimationValues = {
    line1 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["", "", "", "", "", ""],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "200%", "-45", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["", "", "", "", "", ""],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "-100%", "0", "0", "1", "0"],
    },
    line3 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["", "", "", "", "", ""],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "-200%", "45", "1", "1"],
    }
};

let theBulletInitialValues = {
    line1 : {
        zero: ["center", "0", "200%", "-45", "1", "1"], 
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["", "", "", "", "", ""],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero:  ["center", "0", "0", "0", "1", "0"],
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["", "", "", "", "", ""],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line3 : {
        zero:  ["center", "0", "-200%", "45", "1", "1"],
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["", "", "", "", "", ""],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    }
};


theBullet.generateKeyframes("Animate", theBulletAnimationValues);
theBullet.generateKeyframes("Initial", theBulletInitialValues);

theBullet.checkBoxChecked("1", "Animate");
theBullet.checkBoxChecked("2", "Animate");
theBullet.checkBoxChecked("3", "Animate");

theBullet.checkBoxChecked("1", "Initial");
theBullet.checkBoxChecked("2", "Initial");
theBullet.checkBoxChecked("3", "Initial");

theBullet.createStyleTagAndFill();


/**************************************************************************************************************************slide Up */


let robotic = new hamburgerMaker("robotic", "HamburgerContainer", "Toggle", "Toggle", "Label", "Line");
robotic.buildElements();
robotic.setContainerStyle(robotic.container);
robotic.setLabelStyle(robotic.label);
robotic.setCheckBoxStyle(robotic.checkBox);
robotic.setLineStyle(robotic.line);
robotic.generateEmbededHtml();






let roboticAnimationValues = {
    line1 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["center", "0", "200%", "0", "1", "1"],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "200%", "-45", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["", "", "", "", "", ""],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "0", "0", "1", "0"],
    },
    line3 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["center", "0", "-200%", "0", "1", "1"],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "-200%", "45", "1", "1"],
    }
};

let roboticInitialValues = {
    line1 : {
        zero: ["center", "0", "200%", "-45", "1", "1"], 
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["center", "0", "200%", "0", "1", "1"],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero:  ["center", "0", "0", "0", "1", "0"],
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["", "", "", "", "", ""],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line3 : {
        zero:  ["center", "0", "-200%", "45", "1", "1"],
        twentyFive: ["", "", "", "", "", ""],
        fifty: ["center", "0", "-200%", "0", "1", "1"],
        seventyFive: ["", "", "", "", "", ""],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    }
};


robotic.generateKeyframes("Animate", roboticAnimationValues);
robotic.generateKeyframes("Initial", roboticInitialValues);

robotic.checkBoxChecked("1", "Animate");
robotic.checkBoxChecked("2", "Animate");
robotic.checkBoxChecked("3", "Animate");

robotic.checkBoxChecked("1", "Initial");
robotic.checkBoxChecked("2", "Initial");
robotic.checkBoxChecked("3", "Initial");

robotic.createStyleTagAndFill();


console.log(robotic.generatedKeyframes);

















/************************************************************* TO DO- retirer contenu css si object animation contient rien */

// console.log(roboticAnimationValues.line1.twentyFive.toString().replace(/,/g, ""));
