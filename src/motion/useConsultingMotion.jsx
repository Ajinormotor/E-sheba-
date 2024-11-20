
const useConsultingMotion = ({delay = 0}) => {


    const containerVariant = {
        hidden:{y:70},
        next:{opacity:0.5},
        visible:{y:0,
        transition:{
            staggerChildren:0.5,
            delayChildren: delay
        },
      }
    }
    
    const itemVariant = {
        hidden:{y:50},
        visible:{y:0},
        exit:{opacity:0.5},
    }
    
    
      return{
        containerVariant,itemVariant
      }
    }
    
    export default useConsultingMotion
    