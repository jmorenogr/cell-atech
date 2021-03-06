module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.logo-white': {
      height: 'auto',
      '@media (min-width: 1280px)': {
        width: '171px'
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        width: '168px'
      },
      '@media (max-width: 767px)': {
        width: '120px'
      }
    },
    '.logo-color': {
      height: 'auto',
      '@media (min-width: 1280px)': {
        width: '165px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        width: '170px'
      },
      '@media (min-width: 426px) and (max-width: 1023px)': {
        width: '136px'
      },
      '@media (max-width: 425px)': {
        width: '118px'
      }
    },
    '.icon': {
      width: 'auto',
      '@media (min-width: 1280px)': {
        height: '92px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        height: '70px'
      },
      '@media (min-width: 426px) and (max-width: 1023px)': {
        height: '92px'
      },
      '@media (max-width: 425px)': {
        height: '70px'
      }
    },
    '.sent': {
      width: 'auto',
      '@media (min-width: 1280px)': {
        height: '92px'
      },
      '@media (max-width: 1279px)': {
        height: '80px'
      }
    },
    '.image': {
      height: 'auto',
      '@media (min-width: 1520px)': {
        width: '705px'
      },
      '@media (min-width:1280) and (max-width: 1519px)': {
        width: 'calc(50vw-15px)'
      },
      '@media (min-width:1024) and (max-width: 1279px)': {
        width: '560px'
      },
      '@media (min-width:768) and (max-width: 1023px)': {
        width: '670px'
      },
      '@media (min-width:426) and (max-width: 767px)': {
        width: '570px'
      },
      '@media (max-width: 425px)': {
        width: '320px'
      }
    },
  });
};