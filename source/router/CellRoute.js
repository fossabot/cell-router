import {component} from 'web-cell';

const route_map = new Map();


/**
 * Route entry
 */
export default  class CellRoute extends HTMLElement {

    constructor() {  super();  }

    /**
     * @protected
     *
     * @type {Map}
     */
    static get map() {  return route_map;  }

    connectedCallback() {

        if (this.parentNode.tagName === 'CELL-ROUTER')
            route_map.set(this, [
                this.getAttribute('path'), this.getAttribute('tag')
            ]);
        else
            throw new DOMError(
                '<cell-route /> must be a child of <cell-router />'
            );
    }

    disconnectedCallback() {  route_map.delete( this );  }

    /**
     * @type {string}
     */
    get path() {  return  route_map.get( this )[0];  }

    /**
     * Tag name of a Page component
     *
     * @type {string}
     */
    get tag() {  return  route_map.get( this )[1];  }
}


component( CellRoute );