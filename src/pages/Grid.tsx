import GlobalNavigation from "../global-navigation";
import {globalNavigationStructureAllure, globalNavigationStructureVogue} from "../_global-navigation.ts";

const Grid = () => {
    return (
        <div>
            <h1>
                Global Navigation Grid
            </h1>
            <GlobalNavigation rows={globalNavigationStructureAllure.rows} />
            <div className="br"></div>
            <GlobalNavigation rows={globalNavigationStructureVogue.rows} />
        </div>
    )
}

export default Grid