/**
 * @Slider
 * @param root_container_id: string
 * @param container_id: string
 * @param controls_container_id: string
 * @param margins?: number;
 */
class Slider {
    constructor(root_container_id, container_id, controls_container_id, margins = 25) {
        // initing Slider class;
        const [back_control, forward_control] = document.getElementById(controls_container_id).children;
        this.slider_wrapper = document.getElementById(root_container_id);
        this.container = document.getElementById(container_id);
        this.back_control = back_control;
        this.forward_control = forward_control
        this.slide_width = this.container.children[0].clientWidth;
        this.margins = margins;

        // invalidate size;
        this.invalidateStatement();

        // attaching events;
        this.back_control.onclick = this.moveBack.bind(this);
        this.forward_control.onclick = this.moveForward.bind(this);
        window.onresize = this.invalidateStatement.bind(this);
    }
    
    // method to invalidate statemnet;
    invalidateStatement() {
        this.limit = this.getDynamicStatement().limit;
        this.from = this.getDynamicStatement().from;
        this.to = this.getDynamicStatement().to;
    }

    // get current actual statements;
    getDynamicStatement() {
        return {
            limit: (Math.floor(this.slider_wrapper.clientWidth / (this.slide_width + this.margins)) || 1),
            from: 0,
            to: Math.floor(this.slider_wrapper.clientWidth / this.slide_width) - 1
        }
    }

    // move slider to 1 slide back;
    moveBack() {
        this.from -= 1;
        this.to -= 1;

        this.validateNextTick();
        this.render();
    }

    // move slider to 1 slide forward;
    moveForward() {
        this.from += 1;
        this.to += 1;

        this.validateNextTick();
        this.render();
    }

    // validate next tick, check statement to prevent infinity scroll
    validateNextTick() {
        const itemsCount = this.container.children.length;
        if (this.from < 0) {
            this.from = itemsCount - this.limit - 1;
            this.to = itemsCount - 1;
        }
        else if (this.to >= itemsCount)
            this.invalidateStatement();

        // centring slider regarding to current statemnets;
        this.container.style.transform = `translateX(-${this.from * (this.slide_width + this.margins)}px)`
    }

    // render current view bar with actual statements;
    render() {
        const slides = Array.from(this.container.children);
        slides.forEach((slide, index) => {
            const isVisible = index >= this.from && index <= this.to;
            
            // animate next tick;
            if (!isVisible) {
                setTimeout(() => {
                    slide.style.visibility = 'hidden'
                }, 1000)
            }
            else {
                slide.style.visibility = 'visible'
            }
        });
    }

}

// Setting varriables;
const ROOT_CONTAINER = 'cases__sider__root'
const CONTAINER_ID = 'casses-slider';
const CONTROLS_CONTAINER = 'cases__sider__controls';
const MARGINS = 25;

// Initing our slider & calling render;
const slider = new Slider(ROOT_CONTAINER, CONTAINER_ID, CONTROLS_CONTAINER, MARGINS);
slider.render();