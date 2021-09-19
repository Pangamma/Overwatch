import { HeroType } from "./heroes";
import { Point } from "./point";

export interface ProjectilePlan {
    from: Point,
    to: Point,
    
    key?: string;
    label: string;
    hero: HeroType;
    description?: string;
    images?: string[];
}