/// <reference types="three" />
import THREE = require("three");
import { Text2D, AlignmentMethod } from "./Text2D";
export declare class SpriteText2D extends Text2D {
    sprite: THREE.Sprite;
    readonly defaultAlignmentMethod: AlignmentMethod;
    raycast(): any;
    updateText(): void;
}
