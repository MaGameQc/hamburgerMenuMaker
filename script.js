

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



    this.generateEmbededAnimation = function(){
        // let animLine = this.lineName + "Animate";
        // let defaultLine = this.lineName + "Default";

        // let text = 
        // "<style>" + "\n" + 

        // "@keyframes " + animLine + "1" + "{" + "\n" +
        // "from{transform-origin: center; transform : rotate(0deg);}" + "\n" +
        // "to{transform-origin: center; transform:  translateY(200%) rotateZ(-45deg); }" + "\n" +
        // "}" + "\n" + "\n" +
        
        // "@keyframes " + animLine + "2" + "{" + "\n" +
        // "from{transform-origin: center; transform : translateX(0); opacity: 1;}" + "\n" +
        // "to{transform-origin: center; transform : translateX(-100%); opacity: 0; }" + "\n" +
        //  "}" + "\n" + "\n" +

        // "@keyframes " + animLine + "3" + "{" + "\n" +
        // "from{transform-origin: center; transform : rotate(0deg)}" + "\n" +
        // "to{transform-origin: center; transform : translateY(-200%) rotateZ(45deg); }" + "\n" +
        // "}" + "\n" + "\n" +








        // "@keyframes " + defaultLine + "1" + "{" + "\n" +
        // "from{transform-origin: center; transform:  translateY(200%) rotateZ(-45deg); }" + "\n" +
        // "to{transform-origin: center; transform:  translateY(0) rotateZ(0deg); }" + "\n" +
        // "}" + "\n" + "\n" +
        
        // "@keyframes " + defaultLine + "2" + "{" + "\n" +
        // "from{transform-origin: center; transform : translateX(-100%); opacity: 0; }" + "\n" +
        // "to{transform-origin: center; transform : translateX(0); opacity: 1;}" + "\n" +
        // "}" + "\n" +  "\n" +
        
        // "@keyframes " + defaultLine + "3" + "{" + "\n" +
        // "from{transform-origin: center; transform:  translateY(-200%) rotateZ(45deg); }" + "\n" +
        // "to{transform-origin: center; transform:  translateY(0) rotateZ(0deg); }" + "\n" +
        // "}" + "\n" + "\n" +




        
        // "#" + this.checkBoxName + ":checked ~ #" + this.labelName + " ." + this.lineName + ":nth-child(1){" + "\n" +
        // "animation : " + animLine + "1" + " .5s forwards;" + "\n" +
        // "}" + "\n" + "\n" +
         
        // "#" + this.checkBoxName + ":checked ~ #" + this.labelName + " ." + this.lineName + ":nth-child(2){" + "\n" +
        // "animation : " + animLine + "2" + " .5s forwards;" + "\n" +
        // "}" + "\n" + "\n" +
        
        // "#" + this.checkBoxName + ":checked ~ #" + this.labelName + " ." + this.lineName + ":nth-child(3){" + "\n" +
        // "animation : " + animLine + "3" + " .5s forwards;" + "\n" +
        // "}" + "\n" + "\n" +




        // "." + this.lineName + ":nth-child(1){" + "\n" +
        // "animation: " + defaultLine + "1" + " .5s forwards;" + "\n" +
        // "}" + "\n" + "\n" +
        
        // "." + this.lineName + ":nth-child(2){" + "\n" +
        // "animation: " + defaultLine + "2" + " .5s forwar ds;" + "\n" +
        // "}" + "\n" + "\n" +
        
        // "." + this.lineName + ":nth-child(3){" + "\n" +
        // "animation: " + defaultLine + "3" + " .5s forwards;" + "\n" +
        // "}" + "\n" + "\n" +

        // "</style>" + "\n"
        // ;

        // let parent = document.getElementById("toCopy");
        // let br = document.createElement("br");
        // let br2 = document.createElement("br");
        // parent.appendChild(br);
        // parent.appendChild(br2);
        // let content = text;
        // console.log(content);
        // parent.textContent = text;
        };

        this.generateKeyframes = function(indx, state, from1, from2, from3, to1, to2, to3){
            let animLine = this.hamburgerName + state;
            let defaultLine = this.hamburgerName + "Default";
            let text = 
            "@keyframes " + animLine + indx + "{" + "\n" +
            "from{ " + from1 + from2 + from3 + " }" + "\n" +
            "to{ " + to1 + to2 + to3 + " }" + "\n" +
            "}" + "\n" + "\n" 
            ;
            this.cumulateCss(text);

        };

        this.checkBoxChecked = function(indx, state){
            if(state == "Animate"){
                let animName = this.hamburgerName + state;

                let text = 
                "#" + this.checkBoxName + ":checked ~ #" + this.labelName + " .theBulletLine:nth-child(" + indx + "){" + "\n" +
                    "animation : " + animName + indx + " .5s forwards;" + "\n" +
                "}" + "\n" + "\n"
                ;

                this.cumulateCss(text);
            } else{
                let animName = this.hamburgerName + state;
                let text = 
                ".theBulletLine:nth-child(" + indx + "){" + "\n" +
                    "animation: " + animName + indx + " .5s forwards;" + "\n" +
                "}" + "\n" + "\n" 
                ;
                this.cumulateCss(text);
            }

        };


        this.createAnimation = function(){
            let generate = this.generatedKeyframes;
            console.log(generate);

            let style = document.createElement("style");
            style.setAttribute("id", "generatedStyle");
            // style.innerHTML(generate);
            let textNode = document.createTextNode(generate);
            style.appendChild(textNode);
            document.head.appendChild(style);
        };

        this.cumulateCss = function(text){
            let content = text;
            this.generatedKeyframes += content;


            let parent = document.getElementById("toCopy");
            let br = document.createElement("br");
            let br2 = document.createElement("br");
            parent.appendChild(br);
            parent.appendChild(br2);
            parent.textContent += content;
        };

}






let theBullet = new hamburgerMaker("theBullet", "HamburgerContainer", "Toggle", "Toggle", "Label", "Line");
theBullet.buildElements();
theBullet.setContainerStyle(theBullet.container);
theBullet.setLabelStyle(theBullet.label);
theBullet.setCheckBoxStyle(theBullet.checkBox);
theBullet.setLineStyle(theBullet.line);
theBullet.generateEmbededHtml();
theBullet.generateEmbededAnimation();

theBullet.generateKeyframes("1","Animate", "transform-origin: center;", "transform : rotate(0deg);", "", "transform-origin: center;", "transform:  translateY(200%) rotateZ(-45deg);", "");
theBullet.generateKeyframes("2","Animate", "transform-origin: center;", "transform : translateX(0);", "opacity: 1;", "transform-origin: center;", "transform : translateX(-100%);", "opacity: 0;");
theBullet.generateKeyframes("3","Animate", "transform-origin: center;", "transform : rotate(0deg);", "", "transform-origin: center;", "transform : translateY(-200%) rotateZ(45deg);", "");

theBullet.generateKeyframes("1","Initial", "transform-origin: center;",  "transform:  translateY(200%) rotateZ(-45deg);", "",  "transform-origin: center;", "transform:  translateY(0) rotateZ(0deg);", "");
theBullet.generateKeyframes("2","Initial", "transform-origin: center;", "transform : translateX(-100%); opacity: 0;", "", "transform-origin: center;", "transform:  translateY(0) rotateZ(0deg);", "");
theBullet.generateKeyframes("3","Initial", "transform-origin: center;",  "transform:  translateY(-200%) rotateZ(45deg);", "", "transform-origin: center;", "transform:  translateY(0) rotateZ(0deg);", "");

theBullet.checkBoxChecked("1", "Animate");
theBullet.checkBoxChecked("2", "Animate");
theBullet.checkBoxChecked("3", "Animate");

theBullet.checkBoxChecked("1", "Initial");
theBullet.checkBoxChecked("2", "Initial");
theBullet.checkBoxChecked("3", "Initial");

theBullet.createAnimation();




