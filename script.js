

// var Info = {
//     container : document.getElementById("hamburgerContainer"),
//     width : Info.container,
// };

// console.log(Info);

function HamburgerMaker(hamburgerName){
    this.containerToAppend = document.getElementById("mainContainer");
    this.hamburgerName = hamburgerName;
    this.containerName = hamburgerName + "HamburgerContainer" ;
    this.checkBoxName = hamburgerName + "Toggle";
    this.forCheckBoxName = hamburgerName + "Toggle";
    this.labelName = hamburgerName + "Label" ;
    this.lineName = hamburgerName + "Line" ;

    this.container;
    this.checkBox;
    this.label;
    this.line;

    this.generatedKeyframes = "";

    this.buildElements = function(){
        this.container = create("div", "id", this.containerName, this.containerToAppend);

        this.checkBox = create("input", "id", this.checkBoxName, this.container, "checkbox")

        this.label = create("label", "id", this.labelName, this.container, "label", this.checkBoxName);


        for(i = 0; i < 3; i++){
            create("span", "class", this.lineName, this.label);
        }

        function create (tagName, idOrClass, idToGive, parent, type, labelForName) {
            let element = document.createElement(tagName);
            switch (idOrClass) {
                case "id":
                    element.setAttribute("id", idToGive);
                    break;
                case "class":
                    element.setAttribute("class", idToGive);
                    break;
            
                default:
                    break;
            }

            switch (tagName) {
                case "input":
                    element.type = type;
                    break;
                case "label":
                    element.htmlFor = labelForName;
                    break;

                default:
                    break;
            }

            parent.appendChild(element);
            return element
        }
    };

    this.setContainerStyle = function(){
        let el = this.container.style; 
        el.width = "300px";
        el.height = "300px";
        el.backgroundColor = "grey";
        el.position = "relative";
        el.display = "flex";
        el.justifyContent = "space-evenly";
        el.alignItems = "center";
        el.flexDirection = "column";
    };

    this.setLabelStyle = function(){
        let el = this.label.style; 
        el.width = "80%";
        el.height = "80%";
        el.backgroundColor = "cadetblue";
        el.display = "flex";
        el.alignItems = "center";
        el.flexDirection = "column";
        el.cursor = "pointer";
        // console.log(this.label);
    };

    this.setCheckBoxStyle = function(){
        let el = this.checkBox.style;
        el.position = "absolute";
        el.visibility = "hidden";
    };

    this.setLineStyle = function(){
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
            let animationComplexity = animationObject.complexity;
            
            
            switch (animationComplexity) {
                case 2:
                    for(key in animationObject){
                        if(animationObject[key] == animationObject["complexity"]){
                            console.log("this is so wrong");
                        }else{
                            let keyframes = 
                            "\n" +
                            "@keyframes " + animLine + indx + "{" + "\n" +
                            "0%{ transform-origin: " + animationObject[key].zero[0] + "; transform : translate(" + animationObject[key].zero[1] + ", " + animationObject[key].zero[2] + ") rotate(" + animationObject[key].zero[3] + "deg) scale(" + animationObject[key].zero[4] + ");  opacity: " + animationObject[key].zero[5] + ";}" + "\n" +
                            "25%{ }" + "\n" +
                            "50%{ }" + "\n" +
                            "75%{ }" + "\n" +
                            "100%{ transform-origin: " + animationObject[key].oneHundred[0] + "; transform : translate(" + animationObject[key].oneHundred[1] + ", " + animationObject[key].oneHundred[2] + ") rotate(" + animationObject[key].oneHundred[3] + "deg) scale(" + animationObject[key].oneHundred[4] + ");  opacity: " + animationObject[key].oneHundred[5] + ";}" + "\n" +
                            "}" + "\n"
                            ;
                            indx ++
                            text += keyframes;
                        }
                    }
                    break;

                case 3:
                    for(key in animationObject){
                        if(animationObject[key] == animationObject["complexity"]){
                            console.log("this is so wrong");
                        }else{
                            let keyframes = 
                            "\n" +
                            "@keyframes " + animLine + indx + "{" + "\n" +
                            "0%{ transform-origin: " + animationObject[key].zero[0] + "; transform : translate(" + animationObject[key].zero[1] + ", " + animationObject[key].zero[2] + ") rotate(" + animationObject[key].zero[3] + "deg) scale(" + animationObject[key].zero[4] + ");  opacity: " + animationObject[key].zero[5] + ";}" + "\n" +
                            "25%{ }" + "\n" +
                            "50%{ transform-origin: " + animationObject[key].fifty[0] + "; transform : translate(" + animationObject[key].fifty[1] + ", " + animationObject[key].fifty[2] + ") rotate(" + animationObject[key].fifty[3] + "deg) scale(" + animationObject[key].fifty[4] + ");  opacity: " + animationObject[key].fifty[5] + ";}" + "\n" +
                            "75%{ }" + "\n" +
                            "100%{ transform-origin: " + animationObject[key].oneHundred[0] + "; transform : translate(" + animationObject[key].oneHundred[1] + ", " + animationObject[key].oneHundred[2] + ") rotate(" + animationObject[key].oneHundred[3] + "deg) scale(" + animationObject[key].oneHundred[4] + ");  opacity: " + animationObject[key].oneHundred[5] + ";}" + "\n" +
                            "}" + "\n"
                            ;
                            indx ++
                            text += keyframes;
                        }
                    }
                    break;
                case 5:
                        for(key in animationObject){
                            if(animationObject[key] == animationObject["complexity"]){
                                console.log("this is so wrong");
                            }else{
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
                        }
                    break;
                default:
                    break;
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





 
let theBullet = new HamburgerMaker("theBullet");
theBullet.buildElements();
theBullet.setContainerStyle();
theBullet.setLabelStyle();
theBullet.setCheckBoxStyle();
theBullet.setLineStyle();
theBullet.generateEmbededHtml();

let theBulletAnimationValues = {
    complexity : 2,
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
    complexity : 2,
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


let robotic = new HamburgerMaker("robotic");
robotic.buildElements();
robotic.setContainerStyle();
robotic.setLabelStyle();
robotic.setCheckBoxStyle();
robotic.setLineStyle();
robotic.generateEmbededHtml();






let roboticAnimationValues = {
    complexity : 3,
    line1 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "200%", "0", "1", "1"],
        seventyFive: [],
        oneHundred: ["center", "0", "200%", "-45", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["center", "0", "0", "0", "1", "0"],
    },
    line3 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "-200%", "0", "1", "1"],
        seventyFive: [],
        oneHundred: ["center", "0", "-200%", "45", "1", "1"],
    }
};

let roboticInitialValues = {
    complexity : 3,
    line1 : {
        zero: ["center", "0", "200%", "-45", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "200%", "0", "1", "1"],
        seventyFive: [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero:  ["center", "0", "0", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line3 : {
        zero:  ["center", "0", "-200%", "45", "1", "1"],
        twentyFive: [],
        fifty: ["center", "0", "-200%", "0", "1", "1"],
        seventyFive: [],
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



/******************************************************************************************************* slideUp ******************************/


let slideUp = new HamburgerMaker("slideUp");
slideUp.buildElements();
slideUp.setContainerStyle();
slideUp.setLabelStyle();
slideUp.setCheckBoxStyle();
slideUp.setLineStyle();
slideUp.generateEmbededHtml();






let slideUpAnimationValues = {
    complexity : 5,
    line1 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "-400%", "0", "1", "0"],
        seventyFive: ["center", "0", "200%", "-45", "1", "0"],
        oneHundred: ["center", "0", "200%", "-45", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "-400%", "0", "1", "0"],
        seventyFive: ["center", "0", "0%", "0", "1", "0"],
        oneHundred: ["center", "0", "0%", "0", "1", "0"],
    },
    line3 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "-400%", "0", "1", "0"],
        seventyFive: ["center", "0", "-200%", "45", "1", "0"],
        oneHundred: ["center", "0", "-200%", "45", "1", "1"],
    }
};

let slideUpInitialValues = {
    complexity : 2,
    line1 : {
        zero: ["center", "0", "-400%", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "-400%", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line3 : {
        zero: ["center", "0", "-400%", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    }
};


slideUp.generateKeyframes("Animate", slideUpAnimationValues);
slideUp.generateKeyframes("Initial", slideUpInitialValues);

slideUp.checkBoxChecked("1", "Animate");
slideUp.checkBoxChecked("2", "Animate");
slideUp.checkBoxChecked("3", "Animate");

slideUp.checkBoxChecked("1", "Initial");
slideUp.checkBoxChecked("2", "Initial");
slideUp.checkBoxChecked("3", "Initial");

slideUp.createStyleTagAndFill();




/******************************************************************************************************* slideDown ******************************/

let slideDown = new HamburgerMaker("slideDown");
slideDown.buildElements();
slideDown.setContainerStyle();
slideDown.setLabelStyle();
slideDown.setCheckBoxStyle();
slideDown.setLineStyle();
slideDown.generateEmbededHtml();






let slideDownAnimationValues = {
    complexity : 5,
    line1 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "400%", "0", "1", "0"],
        seventyFive: ["center", "0", "200%", "-45", "1", "0"],
        oneHundred: ["center", "0", "200%", "-45", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "400%", "0", "1", "0"],
        seventyFive: ["center", "0", "0%", "0", "1", "0"],
        oneHundred: ["center", "0", "0%", "0", "1", "0"],
    },
    line3 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "0", "400%", "0", "1", "0"],
        seventyFive: ["center", "0", "-200%", "45", "1", "0"],
        oneHundred: ["center", "0", "-200%", "45", "1", "1"],
    }
};

let slideDownInitialValues = {
    complexity : 2,
    line1 : {
        zero: ["center", "0", "400%", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "400%", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line3 : {
        zero: ["center", "0", "400%", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    }
};


slideDown.generateKeyframes("Animate", slideDownAnimationValues);
slideDown.generateKeyframes("Initial", slideDownInitialValues);

slideDown.checkBoxChecked("1", "Animate");
slideDown.checkBoxChecked("2", "Animate");
slideDown.checkBoxChecked("3", "Animate");

slideDown.checkBoxChecked("1", "Initial");
slideDown.checkBoxChecked("2", "Initial");
slideDown.checkBoxChecked("3", "Initial");

slideDown.createStyleTagAndFill();



/******************************************************************************************************* slideLeft ******************************/

let slideLeft = new HamburgerMaker("slideLeft");
slideLeft.buildElements();
slideLeft.setContainerStyle();
slideLeft.setLabelStyle();
slideLeft.setCheckBoxStyle();
slideLeft.setLineStyle();
slideLeft.generateEmbededHtml();






let slideLeftAnimationValues = {
    complexity : 5,
    line1 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "-200%", "0", "0", "1", "0"],
        seventyFive: ["center", "0", "200%", "-45", "1", "0"],
        oneHundred: ["center", "0", "200%", "-45", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "-200%", "0", "0", "1", "0"],
        seventyFive: ["center", "0", "0%", "0", "1", "0"],
        oneHundred: ["center", "0", "0%", "0", "1", "0"],
    },
    line3 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "-200%", "0", "0", "1", "0"],
        seventyFive: ["center", "0", "-200%", "45", "1", "0"],
        oneHundred: ["center", "0", "-200%", "45", "1", "1"],
    }
};

let slideLeftInitialValues = {
    complexity : 2,
    line1 : {
        zero: ["center", "-200%", "0", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero: ["center", "-200%", "0", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line3 : {
        zero: ["center", "-200%", "0", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    }
};


slideLeft.generateKeyframes("Animate", slideLeftAnimationValues);
slideLeft.generateKeyframes("Initial", slideLeftInitialValues);

slideLeft.checkBoxChecked("1", "Animate");
slideLeft.checkBoxChecked("2", "Animate");
slideLeft.checkBoxChecked("3", "Animate");

slideLeft.checkBoxChecked("1", "Initial");
slideLeft.checkBoxChecked("2", "Initial");
slideLeft.checkBoxChecked("3", "Initial");

slideLeft.createStyleTagAndFill();

/******************************************************************************************************* slideRight ******************************/
let slideRight = new HamburgerMaker("slideRight");
slideRight.buildElements();
slideRight.setContainerStyle();
slideRight.setLabelStyle();
slideRight.setCheckBoxStyle();
slideRight.setLineStyle();
slideRight.generateEmbededHtml();






let slideRightAnimationValues = {
    complexity : 5,
    line1 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "200%", "0", "0", "1", "0"],
        seventyFive: ["center", "0", "200%", "-45", "1", "0"],
        oneHundred: ["center", "0", "200%", "-45", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "200%", "0", "0", "1", "0"],
        seventyFive: ["center", "0", "0%", "0", "1", "0"],
        oneHundred: ["center", "0", "0%", "0", "1", "0"],
    },
    line3 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: ["center", "200%", "0", "0", "1", "0"],
        seventyFive: ["center", "0", "-200%", "45", "1", "0"],
        oneHundred: ["center", "0", "-200%", "45", "1", "1"],
    }
};

let slideRightInitialValues = {
    complexity : 2,
    line1 : {
        zero: ["center", "200%", "0", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero: ["center", "200%", "0", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    },
    line3 : {
        zero: ["center", "200%", "0", "0", "1", "0"],
        twentyFive: [],
        fifty: [],
        seventyFive:  [],
        oneHundred: ["center", "0", "0", "0", "1", "1"],
    }
};


slideRight.generateKeyframes("Animate", slideRightAnimationValues);
slideRight.generateKeyframes("Initial", slideRightInitialValues);

slideRight.checkBoxChecked("1", "Animate");
slideRight.checkBoxChecked("2", "Animate");
slideRight.checkBoxChecked("3", "Animate");

slideRight.checkBoxChecked("1", "Initial");
slideRight.checkBoxChecked("2", "Initial");
slideRight.checkBoxChecked("3", "Initial");

slideRight.createStyleTagAndFill();





/************************************************************* TO DO- retirer contenu css si object animation contient rien , animation delay, change style*/

// console.log(roboticAnimationValues.line1.twentyFive.toString().replace(/,/g, ""));
