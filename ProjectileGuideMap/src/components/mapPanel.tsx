import React from "react";
import './mapPanel.scss';

interface MapPanelProps {
    imageUrl: string;
}

interface MapPanelState {
    isExpanded: boolean;
}

export class MapPanel extends React.PureComponent<MapPanelProps, MapPanelState>{
    constructor(props: MapPanelProps) {
        super(props);
        this.state = { isExpanded: false };
    }

    public render(): React.ReactNode {
        return <div className='c-mapPanel'>
        <img src={this.props.imageUrl}></img>
            {/* <div className='cc-image'>
            </div> */}
        </div>;
    }
}