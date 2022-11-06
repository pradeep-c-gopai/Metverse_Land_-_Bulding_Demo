class keyInput{

    constructor(){

        this.keys = {};

        window.addEventListener("keydown",this.down.bind(this));

        window.addEventListener("keyup",this.up.bind(this));

    }

    isPressed(keyCode){

        return this.keys[keyCode] ? this.keys[keyCode] : false;

    }

    down(e){

        if(this.keys[e.keyCode]) return;

        this.keys[e.keyCode] = true;

        console.log("keyDown", e.key,e.keyCode);

    }

    up(e){

        this.keys[e.keyCode] = false;

        console.log("keyUp", e.key,e.keyCode);
        
    }
}

const keyinput = new keyInput();

export default keyinput;