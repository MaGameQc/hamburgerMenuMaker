

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
        let child = document.createTextNode(content.outerHTML);
        parent.appendChild(child);
    };

    this.generateEmbededAnimation = function(){
        let text = 
        "<style>" + "\n" + 
        "@keyframes theBulletAnimate1{" + "\n" +
            "from{transform-origin: center; transform : rotate(0deg);}" + "\n" +
             "to{transform-origin: center; transform:  translateY(200%) rotateZ(-45deg); }" + "\n" +
             "}" + "\n" + "\n" +
        
        "@keyframes theBulletAnimate2{" + "\n" +
         "from{transform-origin: center; transform : translateX(0); opacity: 1;}" + "\n" +
          "to{transform-origin: center; transform : translateX(-100%); opacity: 0; }" + "\n" +
         "}" + "\n" +
        "</style>";

        let parent = document.getElementById("toCopy");
        let br = document.createElement("br");
        let br2 = document.createElement("br");
        parent.appendChild(br);
        parent.appendChild(br2);
        let content = text;
        console.log(content);
        }

}




let theBullet = new hamburgerMaker("theBullet", "HamburgerContainer", "Toggle", "Toggle", "Label", "Line");
theBullet.buildElements();
theBullet.setContainerStyle(theBullet.container);
theBullet.setLabelStyle(theBullet.label);
theBullet.setCheckBoxStyle(theBullet.checkBox);
theBullet.setLineStyle(theBullet.line);
theBullet.generateEmbededHtml();
theBullet.generateEmbededAnimation();

