/// <reference types="three" />
import THREE = require("three");
import { Text2D, AlignmentMethod } from "./Text2D";
export declare class MeshText2D extends Text2D {
    mesh: THREE.Mesh;
    protected geometry: THREE.PlaneGeometry;
    constructor(text?: string, options?: {});
    readonly defaultAlignmentMethod: AlignmentMethod;
    raycast(): void;
    updateText(): void;
}
