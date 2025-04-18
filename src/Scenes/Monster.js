class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 250;
        this.bodyY = 200;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 110, "monsterParts", "leg_whiteE.png");
        my.sprite.ear1 = this.add.sprite(this.bodyX + 40, this.bodyY - 120, "monsterParts", "detail_green_ear.png");
        my.sprite.ear2 = this.add.sprite(this.bodyX - 40, this.bodyY - 120, "monsterParts", "detail_green_ear.png");
        my.sprite.ear2.flipX = true;

        my.sprite.antenna = this.add.sprite(this.bodyX + 10, this.bodyY - 140, "monsterParts", "detail_white_antenna_small.png");

        my.sprite.leftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 110, "monsterParts", "leg_whiteE.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.bodyX + 70, this.bodyY + 20, "monsterParts", "arm_whiteA.png");
        

        my.sprite.leftArm = this.add.sprite(this.bodyX - 70, this.bodyY + 20, "monsterParts", "arm_whiteA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenE.png");
        my.sprite.eye1 = this.add.sprite(this.bodyX + 40, this.bodyY - 70, "monsterParts", "eye_red.png");
        my.sprite.eye2 = this.add.sprite(this.bodyX - 40, this.bodyY - 70, "monsterParts", "eye_red.png");
        
        my.sprite.mouthNoFangs = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "mouthA.png");;
        my.sprite.mouthNoFangs.visible = true;

        my.sprite.mouthWithFangs = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "mouthB.png");
        my.sprite.mouthWithFangs.visible = false;
    }

    update() {
        let moveSpeed = 5;
        var aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        var dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        var sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        var fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        let my = this.my;    // create an alias to this.my for readability

        if (fKey.isDown){
            my.sprite.mouthNoFangs.visible = false;
            my.sprite.mouthWithFangs.visible = true;
        }

        if (sKey.isDown){
            my.sprite.mouthNoFangs.visible = true;
            my.sprite.mouthWithFangs.visible = false;
        }

        if (aKey.isDown){
            for (let part in my.sprite) {
                my.sprite[part].x -= moveSpeed;
            }
        }

        if (dKey.isDown){
            for (let part in my.sprite) {
                my.sprite[part].x += moveSpeed;
            }
        }

    }

}