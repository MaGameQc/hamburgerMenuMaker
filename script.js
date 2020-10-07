




function HamburgerMaker(hamburgerName){
    this.containerToAppend = document.getElementById("iconsContainer");
    this.hamburgerName = hamburgerName;
    this.containerName = hamburgerName + "HamburgerContainer" ;
    this.checkBoxName = hamburgerName + "Toggle";
    this.forCheckBoxName = hamburgerName + "Toggle";
    this.labelName = hamburgerName + "Label" ;
    this.lineName = hamburgerName + "Line" ;

    this.styleTagName = this.hamburgerName + "GeneratedStyleTag";

    this.cardMainParent = document.getElementById("iconsContainer");
    this.cardContainerName = hamburgerName + "CardContainer";
    this.cardContainer;
    this.animationCard;
    this.animationCardName = "animationCardName";
    this.iconToTestContainer;
    this.getCodeBtn;
    this.getCodeBtnName = "getCodeBtn";


    this.container;
    this.checkBox;
    this.label;
    this.line;
    


    this.generatedKeyframes = "";
    this.allElementsStylesObject = "";
    this.styleTagContent = "";

    this.buildElements = function(){
        
        this.cardContainer = create("div", "id", this.cardContainerName, this.containerToAppend);
        
        setCardContainerStyle(this.cardContainerName);
        this.animationcard = create("p", "class", this.animationCardName, this.cardContainer);

        this.container = create("div", "id", this.containerName, this.cardContainer);

        this.checkBox = create("input", "id", this.checkBoxName, this.container, "checkbox")

        this.label = create("label", "id", this.labelName, this.container, "label", this.checkBoxName);

        this.getCodeBtn = create("button", "class", this.getCodeBtnName, this.cardContainer);

        
        function setCardContainerStyle(el){
            console.log(el);
            el = document.getElementById(el).style;
            el.margin = "2rem";
            el.width = "20rem";
            el.height = "20rem";
            el.backgroundColor = "#606470";
            el.display = "flex";
            el.flexDirection = "column";
            el.alignItems = "center";
            el.justifyContent = "space-evenly";
        }

        for(i = 0; i < 3; i++){
            create("span", "class", this.lineName, this.label);
        }

        function create (tagName, idOrClass, idToGive, parent, type, labelForName) {

            let element = document.createElement(tagName);
            let textNode;

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
                case "p":
                    textNode = document.createTextNode(hamburgerName);
                    element.appendChild(textNode);
                    break;
                case "button":
                    textNode = document.createTextNode("Voir Code");
                    element.appendChild(textNode);
                    break;

                default:
                    break;
            }

            parent.appendChild(element);
            return element
        }
        this.addListeners();
    };

    this.addListeners = function(){
        var self = this;
        var state = false;
        document.getElementById(this.labelName).addEventListener("click", function(){
            if(state == false){
                self.generateEmbededHtml();
                self.converCssTagToCopy();
                state = true;
            } else {
                return;
            }
        });
    };


    this.createStyleTag = function(){
        let styleTag = document.createElement("style");
        // let textNode = document.createTextNode("");
        // styleTag.appendChild(textNode);
        styleTag.setAttribute("id", this.styleTagName);
        document.head.appendChild(styleTag);
    };

    this.setStyles = function(){
        let containerStyle = {
            name : this.containerName,
            styles : 
                [
                    "width : 5rem",
                    "height: 5rem",
                    "background-color : transparent",
                    "position : relative",
                    "display: flex",
                    "justify-content : space-evenly",
                    "align-items : center",
                    "flex-direction : column"
                ]
        };

        let labelStyle = {
            name : this.labelName,
            styles : 
                [
                    "width : 100%",
                    "height : 100%",
                    "background-color : #F7F7EE",
                    "display : flex",
                    "align-items: center",
                    "flex-direction : column",
                    "cursor : pointer",
                    "border-radius : 15px"
                ]
        };

        let checkboxStyle = {
            name : this.checkBoxName,
            styles : 
                [
                    "position : absolute",
                    "visibility : hidden"
                ]
        };

        let lineStyle = {
            name : this.lineName,
            styles : 
                [
                    "width: 80%",
                    "height : 14%",
                    "margin-top : 14%",
                    "background-color : #FB7813",
                    "position : relative",
                    "border-radius : 12px"
                ]
        };
        
        // let idOfStyleTag = this.hamburgerName + "GeneratedStyle";
        // PUT ALL OF THE OBJECT WITH STYLES STORED IN ARRAYS TO THEN APPEND THE INFORMATIONS IN THE STYLE TAG
        this.allElementsStylesObject = [containerStyle, labelStyle, checkboxStyle, lineStyle];
        
        this.addStylesToStyleTagContent();


    };

    this.addStylesToStyleTagContent = function(){
        for(i = 0; i < this.allElementsStylesObject.length; i++){
            let name = this.allElementsStylesObject[i].name;
            let stylesToApply = this.allElementsStylesObject[i].styles;
            let style = ""
            let startOfStyle = "\n#" + name + "{ \n";
            let endOfStyle = "}\n"

            if(name == this.lineName){
                startOfStyle = "\n." + name + "{ \n";
            }

            for(x = 0; x < stylesToApply.length; x++){
                style += stylesToApply[x] + "; \n";
            }
            let content = startOfStyle + style + endOfStyle;
            this.styleTagContent += content;
        }
    };

    this.generateEmbededHtml = function(){
        let parent = document.getElementById("codeContent");
        let content = this.container.outerHTML;
        //put a line break between each tag names when text showing in the container
        content = content.replace(/</g, "\n <");
        let child = document.createTextNode(content + "\n" + "\n");
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
            // this.generatedKeyframes += text;
            this.styleTagContent += text;
        };

        this.fillStyleTag = function(){
            let textNode = document.createTextNode(this.styleTagContent);
            let styleTag = document.getElementById(this.styleTagName); 
            styleTag.appendChild(textNode);
        };

        this.converCssTagToCopy = function(){
            let styleTagElement = document.getElementById(this.styleTagName);
            let content = styleTagElement.outerHTML;
            let parent = document.getElementById("codeContent");
            let br = document.createElement("br");
            let br2 = document.createElement("br");
            parent.appendChild(br);
            parent.appendChild(br2);
            parent.textContent += content + "\n";
        }



}


////////////////////////////////////////////// TO DO ANIMATION CONSCTRUCTOR  /////////////////////////////////////////

function AnimationConstructor(typeOfAnimation, complexity, allSequences, secondComplexity, allSecondSequences){
    this.complexity = complexity;
    this.secondComplexity = secondComplexity;

    this.allSequences = allSequences;
    this.allSecondSequences = allSecondSequences;

    this.typeOfAnimation = typeOfAnimation;

    let animationToReverse = allSequences;
    
    this.animationToCreate = {};
    this.secondAnimationToCreate = {};
    this.animationToReverse = {};
    




    
    this.createAnimationObject = function(){
        if(complexity == 2){
            this.animationToCreate.complexity = 2;
            this.animationToCreate.line1 = {zero : allSequences[0], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSequences[1], };
            this.animationToCreate.line2 = {zero : allSequences[2], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSequences[3], };
            this.animationToCreate.line3 = {zero : allSequences[4], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSequences[5], };
            return this.animationToCreate
        }
        if(complexity == 3){
            this.animationToCreate.complexity = 3;
            this.animationToCreate.line1 = {zero : allSequences[0], twentyFive : [], fifty : allSequences[1], seventyFive : [], oneHundred : allSequences[2], };
            this.animationToCreate.line2 = {zero : allSequences[3], twentyFive : [], fifty : allSequences[4], seventyFive : [], oneHundred : allSequences[5], };
            this.animationToCreate.line3 = {zero : allSequences[6], twentyFive : [], fifty : allSequences[7], seventyFive : [], oneHundred : allSequences[8], };
            return this.animationToCreate
        }
        if(complexity == 5){
            this.animationToCreate.complexity = 5;
            this.animationToCreate.line1 = {zero : allSequences[0], twentyFive : allSequences[1], fifty : allSequences[2], seventyFive : allSequences[3], oneHundred : allSequences[4], };
            this.animationToCreate.line2 = {zero : allSequences[5], twentyFive : allSequences[6], fifty : allSequences[7], seventyFive : allSequences[8], oneHundred : allSequences[9], };
            this.animationToCreate.line3 = {zero : allSequences[10], twentyFive : allSequences[11], fifty : allSequences[12], seventyFive : allSequences[13], oneHundred : allSequences[14], };
            return this.animationToCreate
        }

    };

    this.createSecondAnimationObject = function(){
        if(secondComplexity == 2){
            this.secondAnimationToCreate.complexity = 2;
            this.secondAnimationToCreate.line1 = {zero : allSecondSequences[0], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSecondSequences[1], };
            this.secondAnimationToCreate.line2 = {zero : allSecondSequences[2], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSecondSequences[3], };
            this.secondAnimationToCreate.line3 = {zero : allSecondSequences[4], twentyFive : [], fifty : [], seventyFive : [], oneHundred : allSecondSequences[5], };
            return this.secondAnimationToCreate
        }
        if(secondComplexity == 3){
            this.secondAnimationToCreate.complexity = 3;
            this.secondAnimationToCreate.line1 = {zero : allSecondSequences[0], twentyFive : [], fifty : allSecondSequences[1], seventyFive : [], oneHundred : allSecondSequences[2], };
            this.secondAnimationToCreate.line2 = {zero : allSecondSequences[3], twentyFive : [], fifty : allSecondSequences[4], seventyFive : [], oneHundred : allSecondSequences[5], };
            this.secondAnimationToCreate.line3 = {zero : allSecondSequences[6], twentyFive : [], fifty : allSecondSequences[7], seventyFive : [], oneHundred : allSecondSequences[8], };
            return this.secondAnimationToCreate
        }
        if(secondComplexity == 5){
            this.secondAnimationToCreate.complexity = 5;
            this.secondAnimationToCreate.line1 = {zero : allSecondSequences[0], twentyFive : allSecondSequences[1], fifty : allSecondSequences[2], seventyFive : allSecondSequences[3], oneHundred : allSecondSequences[4], };
            this.secondAnimationToCreate.line2 = {zero : allSecondSequences[5], twentyFive : allSecondSequences[6], fifty : allSecondSequences[7], seventyFive : allSecondSequences[8], oneHundred : allSecondSequences[9], };
            this.secondAnimationToCreate.line3 = {zero : allSecondSequences[10], twentyFive : allSecondSequences[11], fifty : allSecondSequences[12], seventyFive : allSecondSequences[13], oneHundred : allSecondSequences[14], };
            return this.secondAnimationToCreate
        }

    };

    this.reverseAnimationObject = function(){

        
        
        if(complexity == 2){
            this.animationToReverse.complexity = 2;
            this.animationToReverse.line1 = {zero : animationToReverse[1], twentyFive : [], fifty : [], seventyFive : [], oneHundred : animationToReverse[0], };
            this.animationToReverse.line2 = {zero : animationToReverse[3], twentyFive : [], fifty : [], seventyFive : [], oneHundred : animationToReverse[2], };
            this.animationToReverse.line3 = {zero : animationToReverse[5], twentyFive : [], fifty : [], seventyFive : [], oneHundred : animationToReverse[4], };
            return this.animationToReverse
        }
        if(complexity == 3){
            this.animationToReverse.complexity = 3;
            this.animationToReverse.line1 = {zero : animationToReverse[2], twentyFive : [], fifty : animationToReverse[1], seventyFive : [], oneHundred : animationToReverse[0], };
            this.animationToReverse.line2 = {zero : animationToReverse[5], twentyFive : [], fifty : animationToReverse[4], seventyFive : [], oneHundred : animationToReverse[3], };
            this.animationToReverse.line3 = {zero : animationToReverse[8], twentyFive : [], fifty : animationToReverse[7], seventyFive : [], oneHundred : animationToReverse[6], };
            return this.animationToReverse
        }
        if(complexity == 5){
            this.animationToReverse.complexity = 5;
            this.animationToCreate.line1 = {zero : allSequences[4], twentyFive : allSequences[3], fifty : allSequences[2], seventyFive : allSequences[1], oneHundred : allSequences[0], };
            this.animationToCreate.line2 = {zero : allSequences[9], twentyFive : allSequences[8], fifty : allSequences[7], seventyFive : allSequences[6], oneHundred : allSequences[5], };
            this.animationToCreate.line3 = {zero : allSequences[14], twentyFive : allSequences[13], fifty : allSequences[12], seventyFive : allSequences[11], oneHundred : allSequences[10], };
            return this.animationToReverse
        }

    };

    if(this.typeOfAnimation == "mirror"){
        this.createAnimationObject();
        this.reverseAnimationObject();
    } 
    if(this.typeOfAnimation == "different"){
        this.createAnimationObject();
        this.createSecondAnimationObject();
    }
   
}





 


 
let theBullet = new HamburgerMaker("theBullet");
theBullet.buildElements();
theBullet.createStyleTag();
theBullet.setStyles();




///////////////////////////////////////////////TO DO TO DO TO DO TO DO TO DO TO DO TO DO TO DO INTÉGRER LE ANIMATION CONSTRUCTOR AU HAMBURGER MAKER

let theBulletAnimationTemplate = new AnimationConstructor(
    "mirror",
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


 let theBulletAnimateValues = theBulletAnimationTemplate.animationToCreate;
 let theBulletInitialValues = theBulletAnimationTemplate.animationToReverse;


theBullet.generateKeyframes("Animate", theBulletAnimateValues);
theBullet.generateKeyframes("Initial", theBulletInitialValues);

theBullet.checkBoxChecked("1", "Animate");
theBullet.checkBoxChecked("2", "Animate");
theBullet.checkBoxChecked("3", "Animate");

theBullet.checkBoxChecked("1", "Initial");
theBullet.checkBoxChecked("2", "Initial");
theBullet.checkBoxChecked("3", "Initial");

theBullet.fillStyleTag();




/**************************************************************************************************************************ROBOTIC */




let robotic = new HamburgerMaker("robotic");
robotic.buildElements();
robotic.createStyleTag();
robotic.setStyles();


let roboticAnimationTemplate = new AnimationConstructor(
    "mirror",
    3,
    [
        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "200%", "0", "1", "1"],
        ["center", "0", "200%", "-45", "1", "1"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "0.5"],
        ["center", "0", "0", "0", "1", "0"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "-200%", "0", "1", "1"],
        ["center", "0", "-200%", "45", "1", "1"],
    ]
);


 let roboticAnimateValues = roboticAnimationTemplate.animationToCreate;
 let roboticInitialValues = roboticAnimationTemplate.animationToReverse;


robotic.generateKeyframes("Animate", roboticAnimateValues);
robotic.generateKeyframes("Initial", roboticInitialValues);

robotic.checkBoxChecked("1", "Animate");
robotic.checkBoxChecked("2", "Animate");
robotic.checkBoxChecked("3", "Animate");

robotic.checkBoxChecked("1", "Initial");
robotic.checkBoxChecked("2", "Initial");
robotic.checkBoxChecked("3", "Initial");

robotic.fillStyleTag();



/******************************************************************************************************* slideUp ******************************/


let slideUp = new HamburgerMaker("slideUp");
slideUp.buildElements();
slideUp.createStyleTag();
slideUp.setStyles();


let slideUpAnimationTemplate = new AnimationConstructor(
    "different",
    5,
    [
        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "0", "-400%", "0", "1", "0"],
        ["center", "0", "200%", "-45", "1", "0"],
        ["center", "0", "200%", "-45", "1", "1"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "0", "-400%", "0", "1", "0"],
        ["center", "0", "0%", "0", "1", "0"],
        ["center", "0", "0%", "0", "1", "0"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "0", "-400%", "0", "1", "0"],
        ["center", "0", "-200%", "45", "1", "0"],
        ["center", "0", "-200%", "45", "1", "1"],
    ],

    2,
    [
        ["center", "0", "-400%", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],

        ["center", "0", "-400%", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],

        ["center", "0", "-400%", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],
    ],
);


 let slideUpAnimateValues = slideUpAnimationTemplate.animationToCreate;
 let slideUpInitialValues = slideUpAnimationTemplate.secondAnimationToCreate;



slideUp.generateKeyframes("Animate", slideUpAnimateValues);
slideUp.generateKeyframes("Initial", slideUpInitialValues);

slideUp.checkBoxChecked("1", "Animate");
slideUp.checkBoxChecked("2", "Animate");
slideUp.checkBoxChecked("3", "Animate");

slideUp.checkBoxChecked("1", "Initial");
slideUp.checkBoxChecked("2", "Initial");
slideUp.checkBoxChecked("3", "Initial");

slideUp.fillStyleTag();




/******************************************************************************************************* slideDown ******************************/

let slideDown = new HamburgerMaker("slideDown");
slideDown.buildElements();
slideDown.createStyleTag();
slideDown.setStyles();

let slideDownAnimationTemplate = new AnimationConstructor(
    "different",
    5,
    [
        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "0", "400%", "0", "1", "0"],
        ["center", "0", "200%", "-45", "1", "0"],
        ["center", "0", "200%", "-45", "1", "1"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "0", "400%", "0", "1", "0"],
        ["center", "0", "0%", "0", "1", "0"],
        ["center", "0", "0%", "0", "1", "0"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "0", "400%", "0", "1", "0"],
        ["center", "0", "-200%", "45", "1", "0"],
        ["center", "0", "-200%", "45", "1", "1"],
    ],

    2,
    [
        ["center", "0", "400%", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],

        ["center", "0", "400%", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],

        ["center", "0", "400%", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],
    ],
);


 let slideDownAnimateValues = slideDownAnimationTemplate.animationToCreate;
 let slideDownInitialValues = slideDownAnimationTemplate.secondAnimationToCreate;


slideDown.generateKeyframes("Animate", slideDownAnimateValues);
slideDown.generateKeyframes("Initial", slideDownInitialValues);

slideDown.checkBoxChecked("1", "Animate");
slideDown.checkBoxChecked("2", "Animate");
slideDown.checkBoxChecked("3", "Animate");

slideDown.checkBoxChecked("1", "Initial");
slideDown.checkBoxChecked("2", "Initial");
slideDown.checkBoxChecked("3", "Initial");

slideDown.fillStyleTag();


/******************************************************************************************************* slideLeft ******************************/

let slideLeft = new HamburgerMaker("slideLeft");
slideLeft.buildElements();
slideLeft.createStyleTag();
slideLeft.setStyles();


let slideLeftAnimationTemplate = new AnimationConstructor(
    "different",
    5,
    [
        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "-200%", "0", "0", "1", "0"],
        ["center", "0", "200%", "-45", "1", "0"],
        ["center", "0", "200%", "-45", "1", "1"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"], 
        ["center", "-200%", "0", "0", "1", "0"],
        ["center", "0", "0%", "0", "1", "0"],
        ["center", "0", "0%", "0", "1", "0"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "-200%", "0", "0", "1", "0"],
        ["center", "0", "-200%", "45", "1", "0"],
        ["center", "0", "-200%", "45", "1", "1"],
    ],

    2,
    [
        ["center", "-200%", "0", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],

        ["center", "-200%", "0", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],

        ["center", "-200%", "0", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],
    ],
);


 let slideLeftAnimateValues = slideLeftAnimationTemplate.animationToCreate;
 let slideLeftInitialValues = slideLeftAnimationTemplate.secondAnimationToCreate;


slideLeft.generateKeyframes("Animate", slideLeftAnimateValues);
slideLeft.generateKeyframes("Initial", slideLeftInitialValues);

slideLeft.checkBoxChecked("1", "Animate");
slideLeft.checkBoxChecked("2", "Animate");
slideLeft.checkBoxChecked("3", "Animate");

slideLeft.checkBoxChecked("1", "Initial");
slideLeft.checkBoxChecked("2", "Initial");
slideLeft.checkBoxChecked("3", "Initial");

slideLeft.fillStyleTag();

/******************************************************************************************************* slideRight ******************************/

let slideRight = new HamburgerMaker("slideRight");
slideRight.buildElements();
slideRight.createStyleTag();
slideRight.setStyles();




let slideRightAnimationTemplate = new AnimationConstructor(
    "different",
    5,
    [
        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "200%", "0", "0", "1", "0"],
        ["center", "0", "200%", "-45", "1", "0"],
        ["center", "0", "200%", "-45", "1", "1"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "200%", "0", "0", "1", "0"],
        ["center", "0", "0%", "0", "1", "0"],
        ["center", "0", "0%", "0", "1", "0"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0", "0", "1", "1"],
        ["center", "200%", "0", "0", "1", "0"],
        ["center", "0", "-200%", "45", "1", "0"],
        ["center", "0", "-200%", "45", "1", "1"],
    ],

    2,
    [
        ["center", "200%", "0", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],

        ["center", "200%", "0", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],

        ["center", "200%", "0", "0", "1", "0"],
        ["center", "0", "0", "0", "1", "1"],
    ],
);


 let slideRightAnimateValues = slideRightAnimationTemplate.animationToCreate;
 let slideRightInitialValues = slideRightAnimationTemplate.secondAnimationToCreate;

slideRight.generateKeyframes("Animate", slideRightAnimateValues);
slideRight.generateKeyframes("Initial", slideRightInitialValues);

slideRight.checkBoxChecked("1", "Animate");
slideRight.checkBoxChecked("2", "Animate");
slideRight.checkBoxChecked("3", "Animate");

slideRight.checkBoxChecked("1", "Initial");
slideRight.checkBoxChecked("2", "Initial");
slideRight.checkBoxChecked("3", "Initial");

slideRight.fillStyleTag();





/******************************************************************************************************* arrow rigt ******************************/
let arrowLeft = new HamburgerMaker("arrowLeft");
arrowLeft.buildElements();
arrowLeft.createStyleTag();
arrowLeft.setStyles();





let arrowLeftAnimationTemplate = new AnimationConstructor(
    "mirror",
    2,
    [
        ["left", "0", "0", "0", "1", "1"], 
        ["left", "0", "220%", "-45", "0.7", "1"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0%", "0", "1", "1"],

        ["left", "0", "0", "0", "1", "1"], 
        ["left", "0", "-220%", "45", "0.7", "1"],
    ]
);


 let arrowLeftAnimateValues = arrowLeftAnimationTemplate.animationToCreate;
 let arrowLeftInitialValues = arrowLeftAnimationTemplate.animationToReverse;


arrowLeft.generateKeyframes("Animate", arrowLeftAnimateValues);
arrowLeft.generateKeyframes("Initial", arrowLeftInitialValues);

arrowLeft.checkBoxChecked("1", "Animate");
arrowLeft.checkBoxChecked("2", "Animate");
arrowLeft.checkBoxChecked("3", "Animate");

arrowLeft.checkBoxChecked("1", "Initial");
arrowLeft.checkBoxChecked("2", "Initial");
arrowLeft.checkBoxChecked("3", "Initial");

arrowLeft.fillStyleTag();



/******************************************************************************************************* arrow Right ******************************/

let arrowRight = new HamburgerMaker("arrowRight");
arrowRight.buildElements();
arrowRight.createStyleTag();
arrowRight.setStyles();

let arrowRightAnimationTemplate = new AnimationConstructor(
    "mirror",
    2,
    [
        ["right", "0", "0", "0", "1", "1"], 
        ["right", "0", "220%", "45", "0.7", "1"],

        ["center", "0", "0", "0", "1", "1"], 
        ["center", "0", "0%", "0", "1", "1"],

        ["right", "0", "0", "0", "1", "1"], 
        ["right", "0", "-220%", "-45", "0.7", "1"],
    ]
);


 let arrowRightAnimateValues = arrowRightAnimationTemplate.animationToCreate;
 let arrowRightInitialValues = arrowRightAnimationTemplate.animationToReverse;


arrowRight.generateKeyframes("Animate", arrowRightAnimateValues);
arrowRight.generateKeyframes("Initial", arrowRightInitialValues);

arrowRight.checkBoxChecked("1", "Animate");
arrowRight.checkBoxChecked("2", "Animate");
arrowRight.checkBoxChecked("3", "Animate");

arrowRight.checkBoxChecked("1", "Initial");
arrowRight.checkBoxChecked("2", "Initial");
arrowRight.checkBoxChecked("3", "Initial");

arrowRight.fillStyleTag();

