import React from "react";
import { MapPanel } from "../../components/mapPanel";
import { PanZoomPanel } from "../../components/panZoomPanel";

interface EichenwaldeProps { }
interface EichenwaldeState { }
export class Eichenwalde extends React.PureComponent<EichenwaldeProps, EichenwaldeState> {
    constructor(props: EichenwaldeProps) {
        super(props);
        this.state = {};
    }

    public render(): React.ReactNode {
        return <>
            <PanZoomPanel>
                <MapPanel imageUrl='assets/maps/eichenwalde.png' />
            </PanZoomPanel>
        </>;
    }
}