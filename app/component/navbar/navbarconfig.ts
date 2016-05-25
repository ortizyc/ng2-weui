interface NavBar {
    name:string;
}

export interface NavBarConfig {
    default?:number;
    navbars:Array<NavBar>
}