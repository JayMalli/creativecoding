const Text = {
    // The styles all Text have in common
    baseStyle: {
      color: 'textColor',
      fontWeight: 400,
      fontFamily: 'Poppins,sans-serif',
    },
  
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
      xs: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      sm: {
        fontSize: '14px',
        lineHeight: '17.07px',
      },
      md: {
        fontSize: '16px',
        lineHeight: '19.5px',
      },
      lg: {
        fontSize: '18px',
        lineHeight: '21.94px',
      },
      lg2: {
        fontSize: '20px',
        lineHeight: '24.38px',
      },
      lg3: {
        fontSize: '22px',
        lineHeight: '28.38px',
      },
      xl: {
        fontSize: '28px',
        lineHeight: '34.13px',
      },
      xxl: {
        fontSize: '25px',
        lineHeight: '40px',
      },
      
      header:{
        fontSize: '32px',
        fontWeight:'600',
      }
      

    },
  
    // styles for different visual variants ("outline", "solid")
    variants: {
      primary: {
        color: 'textColor',
      },
      secondary: {
        color: 'secondaryColor',
      },
      white: {
        color: '#ffffff',
      },
      gray: {
        color: '#606161',
      },
    },
  
    // default values for `size` and `variant`
    defaultProps: {
      size: 'md',
      variant: 'black',
    },
  };
  
  export default Text;