

const useHeroMotion = ({delay=0.2}) => {
  
    const containerVariant = {
        hidden:{x:70},
        next:{opacity:0.5},
        visible:{x:0,
        transition:{
            staggerChildren:0.2,
            delayChildren: delay
        },
      }
    }
    
    const itemVariant = {
        hidden:{x:50},
        visible:{x:0},
        next:{opacity:0.5},
    }
    
    
      return{
        containerVariant,itemVariant
      }
    }

export default useHeroMotion
