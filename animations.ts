export const  fadeInup = {
    initial: {
        opacity:0,
        y:60
    },
    animate:{
        opacity:1,
        y:0,
    },
};
export const stagger={
    initial:{
    },
    animate:{
        opacity:1,
        transition:{
            staggerChildren:0.1,
        },
    },
}

export const routeAnimation={
    initial:{
        opacity: 1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.1,
            duration:0.1,
        },
    },
    exit:{
        opacity:0,
        transition:{
            delay:0.1,
            ease:'easeInOut',
        }
    }
}