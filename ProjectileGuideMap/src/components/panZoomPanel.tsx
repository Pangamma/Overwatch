import React from "react";
import './panZoomPanel.scss';

interface PanZoomPanelProps {
}

interface PanZoomPanelState {
}

export class PanZoomPanel extends React.PureComponent<PanZoomPanelProps, PanZoomPanelState>{
    constructor(props: PanZoomPanelProps) {
        super(props);
        this.state = { isExpanded: false };
    }

    public render(): React.ReactNode {
        return <div className='c-panZoomPanelViewer'>
            <div className='cc-canvas'>
                {this.props.children}
            </div>
        </div>;
    }
}