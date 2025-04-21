class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.leftUpperArmX = 230;
        this.leftUpperArmY = 250;

        this.leftLowerArmX = 230;
        this.leftLowerArmY = 420;

        this.rightLowerArmX = 370;
        this.rightLowerArmY = 420;

        this.leftLegX = 260;
        this.leftLegY = 470;

        this.rightLegX = 340;
        this.rightLegY = 470;

        this.eyeX = 300;
        this.eyeY = 320;

        this.smileX = 300;
        this.smileY = 380;

        this.fangX = 300;
        this.fangY = 370;

        this.eyebrowX = 300;
        this.eyebrowY = 270;

        this.antennaX = 350;
        this.antennaY = 245;
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

        my.sprite.leftUpperArm = this.add.sprite(this.leftUpperArmX, this.leftUpperArmY, "monsterParts", "arm_greenA.png");
        my.sprite.leftUpperArm.flipX = true;
        my.sprite.leftUpperArm.flipY = true;

        my.sprite.leftLowerArm = this.add.sprite(this.leftLowerArmX, this.leftLowerArmY, "monsterParts", "arm_redB.png");
        my.sprite.leftLowerArm.flipX = true;

        my.sprite.rightLowerArm = this.add.sprite(this.rightLowerArmX, this.rightLowerArmY, "monsterParts", "arm_redB.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_yellowA.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_yellowA.png");

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueC.png");

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_yellow.png");

        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");

        my.sprite.fang = this.add.sprite(this.fangX, this.fangY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false;

        my.sprite.eyebrow = this.add.sprite(this.eyebrowX, this.eyebrowY, "monsterParts", "eyebrowC.png");

        my.sprite.antenna = this.add.sprite(this.antennaX, this.antennaY, "monsterParts", "detail_blue_antenna_large.png");

        // Create keys
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.smile.visible = true;
            my.sprite.fang.visible = false;
        });

        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        let dx = 1;

        if (this.aKey.isDown) {
            for (let sprite of Object.keys(my.sprite)) {
                my.sprite[sprite].x -= dx;
            }
        }
        if (this.dKey.isDown) {
            for (let sprite of Object.keys(my.sprite)) {
                my.sprite[sprite].x += dx;
            }
        }
    }

}