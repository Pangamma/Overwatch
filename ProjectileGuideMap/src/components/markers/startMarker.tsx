import React from "react";

interface StartMarkerProps { 
    label: string;
}

interface StartMarkerState {
    isExpanded: boolean;
}

export class StartMarker extends React.PureComponent<StartMarkerProps, StartMarkerState>{
    constructor(props: StartMarkerProps) {
        super(props);
        this.state = { isExpanded: false };
    }

    public render(): React.ReactNode {
        return
    }
}