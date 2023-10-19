import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export function ParticleAmong ()  {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                zLayers:100,
                fullScreen:{
                    enable:true,
                    zIndex:-1,
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#956dea",
                    },
                    move: {
                      angle: {
                        offset: 0,
                        value: 10
                      },
                      attract: {
                        distance: 200,
                        enable: false,
                        rotate: {
                          x: 3000,
                          y: 3000
                        }
                      },
                      center: {
                        x: 50,
                        y: 50,
                        mode: "percent",
                        radius: 0
                      },
                      decay: 0,
                      distance: {},
                      direction: "right",
                      drift: 0,
                      enable: true,
                      gravity: {
                        acceleration: 9.81,
                        enable: false,
                        inverse: false,
                        maxSpeed: 50
                      },
                      
                      outModes: {
                        default: "out",
                        bottom: "out",
                        left: "out",
                        right: "out",
                        top: "out"
                      },
                      
                      speed: 2,
                    },
                    number: {
                      value: 200
                    },
                    opacity: {
                      value: 1,
                    },
                    shape: {
                      close: true,
                      fill: true,
                      type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    groups:{
                      z5000: {
                        number: {
                          value: 70
                        },
                        zIndex: {
                          value: 50
                        }
                      },
                      z7500: {
                        number: {
                          value: 30
                        },
                        zIndex: {
                          value: 75
                        }
                      },
                      z2500: {
                        number: {
                          value: 50
                        },
                        zIndex: {
                          value: 25
                        }
                      },
                      z1000: {
                        number: {
                          value: 40
                        },
                        zIndex: {
                          value: 10
                        }
                      }

                    }
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                detectRetina: true,
                "responsive": [],
                "smooth": false,
                "style": {},
                "themes": [],
                emitters: {
                  autoPlay: true,
                  fill: true,
                  life: {
                    wait: false
                  },
                  rate: {
                    quantity: 1,
                    delay: 7
                  },
                  shape: "square",
                  startCount: 0,
                  size: {
                    mode: "percent",
                    height: 0,
                    width: 0
                  },
                  particles: {
                    shape: {
                      type: "images",
                      options: {
                        images: {
                          src: "https://particles.js.org/images/cyan_amongus.png",
                          width: 500,
                          height: 634
                        }
                      }
                    },
                    size: {
                      value: 40
                    },
                    move: {
                      speed: 10,
                      outModes: {
                        default: "none",
                        right: "destroy"
                      },
                      straight: true
                    },
                    zIndex: {
                      value: 0
                    },
                    rotate: {
                      value: {
                        min: 0,
                        max: 360
                      },
                      animation: {
                        enable: true,
                        speed: 10,
                        sync: true
                      }
                    }
                  },
                  position: {
                    x: -5,
                    y: 55
                  }
                },
                "motion": {
                  "disable": false,
                  "reduce": {
                    "factor": 4,
                    "value": true
                  }
                }
            }}
        />
    );
}