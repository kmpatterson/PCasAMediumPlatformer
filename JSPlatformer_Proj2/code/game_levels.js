var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                         o                                      ",
   "                                                                                ",
   "                         o         xxx  xxx                                     ",
   "                              xxx    x!!x    xxxxxxxxx     o                    ",
   "                  o     xx           xxxx                 xxx                   ",
   "                                                                                ",
   "                 xx                                             xxxxxx          ",
   "                                                                                ",
   "                                                                        xxxxx   ",
   "   @       xxxxx                                        xxxxxxx                 ",
   "  xxx                  xxxx                                                     ",
   "  xxx                                                                           ",
   "  xxx                                                                      o  xx",
   "  xxx            xxx                                                        xxxx",
   "  xxx                  o   ^                        o   ^                xxxxxxx",
   "  xxxx  xxxx  xxx     xxxxxxxxxxxx          xxx    xxxxxxxxxx          xxxxxxxxx",
   "     x!!x       x!!!!!x                                         xxx             ",
   "     x!!x       xxxxxxx             xxxxx                                       ",
   "     xxxx                                                    x!!!!!!!!!!!!!x    ",
   "                                                             xxxxxxxxxxxxxxx    ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                     xxxx          o                                                              ",
   "                          xxxxxx              xxxxxxxx                                                            ",
   "                  x    xxx     x!!!!!!!!!!!!!!x      x                                                            ",
   "         xxxxx       !!!!!!!!  x!!!!!!!!!!!!!!x       xxx                                                         ",
   "                   !!!x     !!!!!!!!!!!!!!!!!!x          x                                                        ",
   "                   vxxx        x!!!!!!!!!!!!!!x          x                                                        ",
   "    xxxx           vx           x!!!!!!!!!!!!!!!!!!!!    x                                                        ",
   "        xx          x        !!!!!!!!!!!!!!!!x      !    x         o                                              ",
   "              o     x        !  x!!!!!!!!!!!!x       !   x                                                        ",
   "                    x        !  x!!!!!!!!!!!!x        !!!!!                                                       ",
   "              xx    x    !!!!!  x!!!!!!!!!!!!x           x!    xxxxxxxxxx                                         ",
   "                !!!!!!!!!!      x!!!!!!!!!!!!x           x!                                                       ",
   "         xxx    !xxxx           xx!!!!!!!!!!xx           x!                                                       ",
   "                !x                xxxxxxxxxx             x!                                                       ",
   "                !x                                       x!                                                       ",
   "  xxxx          !x                                       x!                                                       ",
   "          o     !x                                       x!!!!                                                    ",
   "                !x                                        xxx!!!                                                  ",
   "         xx     vx                                           xx!!!              xx                                ",
   "                 x                                             xx!                                                ",
   "                xx                                              x!                     o      xxx                 ",
   "   xxxx         x                                                x!!                                              ",
   "              xxx                                                 x!!                xxx                  o       ",
   "             x                                                     x!                                xx           ",
   "            xx                                                     x!                                             ",
   "  @       xxx                                                      x!!!!!!                                ^       ",
   " xxxxxxxxx                                                         xxxxxx!                          xxxxxxxxxxxxxx",
   "                                                                         x!!!!!!!!!!!!!!!!!!!!!!!!!!x             "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "  @                                                                                                           ",
   "xxxxxx                                                                                                        ",
   "      x                                                                                                       ",
   "      x                                                                                                       ",
   "     x                                                                                                        ",
   "!!!!!!!!v                                                                                                     ",
   "!!!!!!!!                                                                                                      ",
   "!!!!!!!v                                                                                                      ",
   "      x                                                                                                       ",
   "      x                                                                                                       ",
   "xxxxxx            xxxxx                                                                                       ",
   "x                                                                                                             ",
   "x            xxxx                                                                                             ",
   "x  o                                                                                                          ",
   "x         x!!!!!!!           o                                                                                ",
   "xxxxxxxxxxxxxxvvvv                                                                                            ",
   "                            xxxx                                                                              ",
   "     o                                                                                                        ",
   "                    xxxx                                                                                      ",
   "   o    o                                                                                                     ",
   "   xxxxxx                                                                                                     ",
   "                                                              xxxxxx                                          ",
   "                                             ^                                                                ",
   "xxxxxxxxx    x!!!!!!!!!!!!!!!!!!!!!x   xxxxxxxxxxxxxx                                                         ",
   "!!!!!!!!x    x!!!!!!!!!!!!!!!!!!!!!x   x!!!!!!!!!!!!!x                                                        ",
   "!!!!!!!!x    vxxxxxxxxxxxxxxxxxxxxxv   x!!!!!!!!!!!!!x                                                        ",
   "!!!!!!!!x                              x!!!!!!!!!!!!!x                                                        ",
   "!!!!!!!!xx                            xx!!!!!!!!!!!!!!!!!!!                         ^                         ",
   "!!!!!!!!x x                          x x!!!!!!!!!!!!!!!!!!!!!                   xxxxxxxxx                     ",
   "!!!!!!!!x                              x!!!!!!!!!!!!!!!!!!!!!!!                                               ",
   "!!!!!!!!!xxxxxxxxxxxx    xxxxxxxxxxxxxx!!!!!!!!!!!!!!xxxxxxxvv                                                ",
   "!!!!!!!!!!!!!!!!!!!!x    x!!!!!!!!!!!!!!!!!!!!!!!!!!!xx                                                       ",
   "!!!!!!!!!!!!!!!!!!!!x    x!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                        ",
   "!xxxxxxxxxxxxxxxxxxxv    vxxxxxxxxxxxxxxxxxxvxxxxxxxv                                                         ",
   "!                                                                                                             ",
   "!                                                                                                             ",
   "!                                                                                                             ",
   "!                                                o              xxxx                              o           ",
   "!                                        xxx           xxx                    x        x                      ",
   "!                    xxxx    xxxxxxx                        !!!!                                              ",
   "!                                               ^         !!!!!!!!!!!!             ^                          ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx!    xxxxxxxxxxxxxxxxxxx      xxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   " x             x                                                                                              ",
   "  x           x                                                                                               ",
   "   x         x                                                                                                ",
   "    x   x   x                                                                                                 ",
   "     x  x  x                                                                                                  ",
   "      x   x                                                                                                   ",
   "           xxxxxxx                                                                                            ",
   "              x                                                                                               ",
   "              x                                                                                               ",
   "              x                                                                                               ",
   "              x                                                                                               ",
   "           xxxxxxx                                                                                            ",
   "                                                                                                              ",
   "                x    x                                                                                        ",
   "                xx   x                                                                                        ",
   "                x x  x                                                                                        ",
   "                x  x x                                                                                        ",
   "                x   xx                                                                                        ",
   "                x    x                                                                                        ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
