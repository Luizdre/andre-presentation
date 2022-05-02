export class TechModel{
    name : String;
    asset : String[];
    description : String;

    constructor(name:String, asset:String[], description:String){
        this.name = name,
        this.asset = asset,
        this.description = description
    };
}