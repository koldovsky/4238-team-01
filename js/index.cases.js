// Configurations;
    const ROOT_CONTAINER = 'cases__sider__root'
    const CONTAINER_ID = 'casses-slider';
    const CONTROLS_CONTAINER = 'cases__sider__controls';
    const MARGINS = 25;


    const sliderWrapper = document.getElementById(ROOT_CONTAINER);
    const container = document.getElementById(CONTAINER_ID);
    
    const [backControl, forwardControl] = document.getElementById(CONTROLS_CONTAINER).children;
    
    // Remebering static size of slider element;
    const slideWidth = container.children[0].clientWidth;

    const getInitialState = () => ({
        VIEW_BAR_LIMIT: (Math.floor(sliderWrapper.clientWidth / (slideWidth + MARGINS)) || 1),
        from: 0,
        to: Math.floor(sliderWrapper.clientWidth / slideWidth) - 1
    });
    
    // initing slider logic variables;
    let { VIEW_BAR_LIMIT, from, to } = getInitialState();
    let timeoutInterval = null;

    // Move carusel back;
    const onBack = () => {
        from -= VIEW_BAR_LIMIT;
        to -= VIEW_BAR_LIMIT;

        render(false);
    };

    // Move carusel forward;
    const onForward = () => {
        from += VIEW_BAR_LIMIT;
        to += VIEW_BAR_LIMIT;
        render(true);
    }

    // Detecting dynamic changing window size;
    window.onresize = () => {
        const initData = getInitialState();
        from = initData.from;
        to = initData.to;
        VIEW_BAR_LIMIT = initData.VIEW_BAR_LIMIT;
        render();
    }

    // attaching the event to DOM elemnt responsible for moving slides;
    backControl.onclick = onBack;
    forwardControl.onclick = onForward;

    // Global entry function;
    function render(isForw) {
        const slides = container.children;

        // validating current slides set;
        if(to >= slides.length) {
            to = getInitialState().to;
            from = getInitialState().from;
        } else if(from < 0) {
            from = slides.length - VIEW_BAR_LIMIT;
            to = slides.length - 1;
        }
    
        Array.from(slides).forEach((slide, index) => {
            // checking is visible
            const isVisible = index >= from && index <= to;

            // removing animation class by default;
            slide.className = slide.className.replace('cases__is-active', '') 
            
            // Do animation;
            if(isVisible && typeof isForw === 'boolean') 
                slide.className+= isForw ? ' cases__animate-forward' : ' cases__animate-back ';
            
            // Control of DOM    
            slide.style.display = isVisible ? 'inline-block' : 'none'
        });
    };

    // Doing initial render;
    render();