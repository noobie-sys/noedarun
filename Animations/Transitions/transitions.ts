export const slideIn =  {
    initial : {
        x : '100%'
    },
    animate : {
        x : "0",
        transition: {
            duration : 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    exit : {
        x : '100%',
        transition: {
            duration : 1,
            delay : 0.4 ,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const slideInAccordian = {
    initial : {
        height : 0,
        opacity : 0
    },
    animate : {
        height : "10rem",
        transition: {
            duration : 0.5,
            ease: [0.76, 0, 0.24, 1]
        },
        opacity : 1
    },
    exit : {
        height : 0,
        opacity : 0,
        transition: {
            duration : 0.6,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const  textSlideIn = {
    initial : {
        y : "100%"
    },
    animate : (num : number) => ({
        y : "0",
        transition: {
            duration : 1,
            delay : 0.25 * num,
            ease: [0.76, 0, 0.24, 1]
        }
    }),
    exit : {
        y : "-100%",
        transition: {
            duration : 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const slideDownNav = {
    initial : {
        y : "-50",
        // opacity : 0
    },
    animate : {
        y : 0,
        transition: {
            duration : 1,
            delay : 0.5,
        }
    },
    exit : {
        opacity  : -50,
        transition: {
            duration : 1,
            delay : 0.5,
        }
    }
}


export const slideUpOpacity = {
    initial : {
        opacity : 0,
        y : 50
    },
    animate : (num : number) =>  ({
        opacity : 1,
        y : 0,
        transition: {
            duration : 0.5,
            delay : 0.08 * num,
            ease: [0.76, 0, 0.24, 1]
        }
    }),
    
}