

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
        el.backgroundColor = "#0D7377";
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
        el.backgroundColor = "#F7F7EE";
        el.display = "flex";
        el.alignItems = "center";
        el.flexDirection = "column";
        el.cursor = "pointer";
        el.borderRadius = "15px";
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
        el.backgroundColor = "#FB7813";
        el.position = "relative";
        el.borderRadius = "12px";
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


////////////////////////////////////////////// TO DO ANIMATION CONSCTRUCTOR  /////////////////////////////////////////

function AnimationConstructor(complexity, allSequences){
    this.complexity = complexity;
    this.allSequences = allSequences;
    this.objectToCreate = {};
    this.objectToReverse = {};


    
    this.createAnimationObject = function(){
        if(complexity == 2){
            this.objectToCreate.complexity = 2;
            this.objectToCreate.line1 = {zero : allSequences[0], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSequences[1], };
            this.objectToCreate.line2 = {zero : allSequences[2], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSequences[3], };
            this.objectToCreate.line3 = {zero : allSequences[4], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSequences[5], };
            console.log(this.objectToCreate);
            console.log("og");

            return this.objectToCreate
        }
        if(complexity == 3){
            this.objectToCreate.complexity = 3;
            this.objectToCreate.line1 = {zero : allSequences[0], twentyFive : [], fifty : allSequences[1], seventyFive : [], oneHundred : allSequences[2], };
            this.objectToCreate.line2 = {zero : allSequences[3], twentyFive : [], fifty : allSequences[4], seventyFive : [], oneHundred : allSequences[5], };
            this.objectToCreate.line3 = {zero : allSequences[6], twentyFive : [], fifty : allSequences[7], seventyFive : [], oneHundred : allSequences[8], };
            return this.objectToCreate
        }
        if(complexity == 5){
            this.objectToCreate.complexity = 5;
            this.objectToCreate.line1 = {zero : allSequences[0], twentyFive : allSequences[1], fifty : allSequences[2], seventyFive : allSequences[3], oneHundred : allSequences[4], };
            this.objectToCreate.line2 = {zero : allSequences[5], twentyFive : allSequences[6], fifty : allSequences[7], seventyFive : allSequences[8], oneHundred : allSequences[9], };
            this.objectToCreate.line3 = {zero : allSequences[10], twentyFive : allSequences[11], fifty : allSequences[12], seventyFive : allSequences[13], oneHundred : allSequences[14], };
            return this.objectToCreate
        }

    }

    // this.reverseAnimationObject = function(animationToReverse){
    //     console.log(animationToReverse);
    //     if(complexity == 2){
    //         this.objectToReverse.complexity = 2;
    //         this.objectToReverse.line1 = {zero : animationToReverse[1], twentyFive : [], fifty : [], seventyFive : [], oneHundred : animationToReverse[0], };
    //         this.objectToReverse.line2 = {zero : animationToReverse[3], twentyFive : [], fifty : [], seventyFive : [], oneHundred : animationToReverse[2], };
    //         this.objectToReverse.line3 = {zero : animationToReverse[5], twentyFive : [], fifty : [], seventyFive : [], oneHundred : animationToReverse[4], };
    //         console.log(this.objectToReverse);
    //         return this.objectToReverse
    //     }
    //     if(complexity == 3){
    //         this.objectToReverse.complexity = 2;
    //         this.objectToReverse.line1 = {zero : animationToReverse[2], twentyFive : [], fifty : animationToReverse[1], seventyFive : [], oneHundred : animationToReverse[0], };
    //         this.objectToReverse.line2 = {zero : animationToReverse[5], twentyFive : [], fifty : animationToReverse[4], seventyFive : [], oneHundred : animationToReverse[3], };
    //         this.objectToReverse.line3 = {zero : animationToReverse[8], twentyFive : [], fifty : animationToReverse[7], seventyFive : [], oneHundred : animationToReverse[6], };
    //         return this.objectToReverse
    //     }
    //     // if(complexity == 5){
    //     //     this.objectToReverse.complexity = 2;
    //     //     this.objectToReverse.line1 = {zero : allSequences[0], twentyFive : allSequences[1], fifty : allSequences[2], seventyFive : allSequences[3], oneHundred : allSequences[4], };
    //     //     this.objectToReverse.line2 = {zero : allSequences[5], twentyFive : allSequences[6], fifty : allSequences[7], seventyFive : allSequences[8], oneHundred : allSequences[9], };
    //     //     this.objectToReverse.line3 = {zero : allSequences[10], twentyFive : allSequences[11], fifty : allSequences[12], seventyFive : allSequences[13], oneHundred : allSequences[14], };
    //     //     this.reverseAnimationObject(this.complexity, this.objectToCreate);
    //     // }
    // }
}



let theBulletAnimationTemplate = new AnimationConstructor(
    2,
    [
    ["center", "0", "0", "0", "1", "1"], 
    ["center", "0", "200%", "-45", "1", "1"],
    ["center", "0", "0", "0", "1", "1"], 
    ["center", "-100%", "0", "0", "1", "0"],
    ["center", "0", "0", "0", "1", "1"], 
    ["center", "0", "-200%", "45", "1", "1"],
    ]
);


 let theBulletAnimateValues = theBulletAnimationTemplate.createAnimationObject();
//  console.log(theBulletAnimateValues);
//  let theBulletInitialValues = theBulletAnimationTemplate.reverseAnimationObject(theBulletAnimateValues);                              RENDUE LA
 

////////////////////////////////////////////// TO DO ANIMATION CONSCTRUCTOR  /////////////////////////////////////////

 
let theBullet = new HamburgerMaker("theBullet");
theBullet.buildElements();
theBullet.setContainerStyle();
theBullet.setLabelStyle();
theBullet.setCheckBoxStyle();
theBullet.setLineStyle();
theBullet.generateEmbededHtml();

// let theBulletAnimationValues = {
//     complexity : 2,
//     line1 : {
//         zero: ["center", "0", "0", "0", "1", "1"], 
//         twentyFive: [],
//         fifty: [],
//         seventyFive: [],
//         oneHundred: ["center", "0", "200%", "-45", "1", "1"],
//     },
//     line2 : {
//         zero: ["center", "0", "0", "0", "1", "1"], 
//         twentyFive: [],
//         fifty: [],
//         seventyFive: [],
//         oneHundred: ["center", "-100%", "0", "0", "1", "0"],
//     },
//     line3 : {
//         zero: ["center", "0", "0", "0", "1", "1"], 
//         twentyFive: [],
//         fifty: [],
//         seventyFive: [],
//         oneHundred: ["center", "0", "-200%", "45", "1", "1"],
//     }
// };

// let theBulletInitialValues = {
//     complexity : 2,
//     line1 : {
//         zero: ["center", "0", "200%", "-45", "1", "1"], 
//         twentyFive: [],
//         fifty: [],
//         seventyFive: [],
//         oneHundred: ["center", "0", "0", "0", "1", "1"],
//     },
//     line2 : {
//         zero:  ["center", "0", "0", "0", "1", "0"],
//         twentyFive: [],
//         fifty: [],
//         seventyFive: [],
//         oneHundred: ["center", "0", "0", "0", "1", "1"],
//     },
//     line3 : {
//         zero:  ["center", "0", "-200%", "45", "1", "1"],
//         twentyFive: [],
//         fifty: [],
//         seventyFive: [],
//         oneHundred: ["center", "0", "0", "0", "1", "1"],
//     }
// };


theBullet.generateKeyframes("Animate", theBulletAnimateValues);
// theBullet.generateKeyframes("Initial", theBulletInitialValues);                                     RENDU LA

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






/******************************************************************************************************* arrow rigt ******************************/
let arrowLeft = new HamburgerMaker("arrowLeft");
arrowLeft.buildElements();
arrowLeft.setContainerStyle();
arrowLeft.setLabelStyle();
arrowLeft.setCheckBoxStyle();
arrowLeft.setLineStyle();
arrowLeft.generateEmbededHtml();






let arrowLeftAnimationValues = {
    complexity : 2,
    line1 : {
        zero: ["left", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["left", "0", "220%", "-45", "0.7", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["center", "0", "0%", "0", "1", "1"],
    },
    line3 : {
        zero: ["left", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["left", "0", "-220%", "45", "0.7", "1"],
    }
};

let arrowLeftInitialValues = {
    complexity : 2,
    line1 : {
        zero:  ["left", "0", "220%", "-45", "0.7", "1"],
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["left", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["center", "0", "0%", "0", "1", "1"],
    },
    line3 : {
        zero:  ["left", "0", "-220%", "45", "0.7", "1"],
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["left", "0", "0", "0", "1", "1"],
    }
};


arrowLeft.generateKeyframes("Animate", arrowLeftAnimationValues);
arrowLeft.generateKeyframes("Initial", arrowLeftInitialValues);

arrowLeft.checkBoxChecked("1", "Animate");
arrowLeft.checkBoxChecked("2", "Animate");
arrowLeft.checkBoxChecked("3", "Animate");

arrowLeft.checkBoxChecked("1", "Initial");
arrowLeft.checkBoxChecked("2", "Initial");
arrowLeft.checkBoxChecked("3", "Initial");

arrowLeft.createStyleTagAndFill();




/******************************************************************************************************* arrow Left ******************************/

let arrowRight = new HamburgerMaker("arrowRight");
arrowRight.buildElements();
arrowRight.setContainerStyle();
arrowRight.setLabelStyle();
arrowRight.setCheckBoxStyle();
arrowRight.setLineStyle();
arrowRight.generateEmbededHtml();






let arrowRightAnimationValues = {
    complexity : 2,
    line1 : {
        zero: ["right", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["right", "0", "220%", "45", "0.7", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["center", "0", "0%", "0", "1", "1"],
    },
    line3 : {
        zero: ["right", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["right", "0", "-220%", "-45", "0.7", "1"],
    }
};

let arrowRightInitialValues = {
    complexity : 2,
    line1 : {
        zero:  ["right", "0", "220%", "45", "0.7", "1"],
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["right", "0", "0", "0", "1", "1"],
    },
    line2 : {
        zero: ["center", "0", "0", "0", "1", "1"], 
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["center", "0", "0%", "0", "1", "1"],
    },
    line3 : {
        zero:  ["right", "0", "-220%", "-45", "0.7", "1"],
        twentyFive: [],
        fifty: [],
        seventyFive: [],
        oneHundred: ["right", "0", "0", "0", "1", "1"],
    }
};


arrowRight.generateKeyframes("Animate", arrowRightAnimationValues);
arrowRight.generateKeyframes("Initial", arrowRightInitialValues);

arrowRight.checkBoxChecked("1", "Animate");
arrowRight.checkBoxChecked("2", "Animate");
arrowRight.checkBoxChecked("3", "Animate");

arrowRight.checkBoxChecked("1", "Initial");
arrowRight.checkBoxChecked("2", "Initial");
arrowRight.checkBoxChecked("3", "Initial");

arrowRight.createStyleTagAndFill();















/************************************************************* TO DO- retirer contenu css si object animation contient rien , animation delay, change style*/

// console.log(roboticAnimationValues.line1.twentyFive.toString().replace(/,/g, ""));
