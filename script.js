document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("mostrar");
  const asciiArea = document.getElementById("ascii");
  const gallery = document.getElementById("gallery");
  const mensagem = document.getElementById("mensagem");

  const arte = String.raw`
 ################################################################################################################################################################
##..                                                                    ::++++++++++mmmmmmmmmm::::::mmmmmm++++::::::::::..                                      
##..                                                                  ::::::++mmmmmmmmMMMMmm++::::++++mmmmmm++++++::::++++::..                                  
##..                                                                ..::++mmMMMMMMMMMMmmmmmm::++mm++++mm++::++++++::::++mm++++--                                
##..                                                              ..++mmmmMMMMMMMMMMMMMMMMMMmm++++++mmmmmm--++mmmm++::::++++++++::                              
##..                                                            --mmmmMMMMMMmmmmMMMMMMMMMMmmmm::::::mmmm++--mmMMmmmm::::++mmmmmmmm::                            
##..                                                          --mmmm++++mmmmmmmmmmmmmmmm++::++mmmmmmmmmm::  ++MMMMmm::::mmmmmmMMmmmm++..                        
##..                                                        --++++++mmmmmmmmmmmmMMMMmmmm::--::++++mmmmmm::  ++MMmm++::--++mmmmMMMMMMmm++                        
##..                                                      ..++++mmMMMMMMMMMMMMMMMMMMmm++--::mmMMMMmmmm++--  mmmmmm++::::++++MMMMMMMMMMMM--                      
##..                                                      ::mmMMMMMMMMMMMMMMMMMMMMMMmm++::++mmMMMMMMMMmm....mmMMMMmm::++++++mmMMMMMMmmmmmm                      
##..                                                    ..mmmmMMMMMMMMMMMMMMMMMMmmmm++++mmMMMMMMMMMMmm::....mmMMMMmm++++mmmmmmmmmmMMMMmmmm--                    
##..                                          ..::::mm::mmmmMMMMMMMMMM@@MMMMMMmm++mmmmMM@@@@@@@@MMMM++--  --mmMMMMmm++::mmMMmmmmMMmmmmMMmmmm..                  
##..                                        --++--::++mmmmMMMMMMMMMMMMMMmm++++++++mmMMMMMM@@@@mm++----    ::mmMMMMMMMM::++MMMMMMMMMMMMmmmmmm++                  
##..                                        ----  ++mmmmmmMMMMMMMMMMMMMMmmmm++::++mmMMMM@@MM++--..  ------mmMMMMmmmm++++mmmmMMMMMMMMMMMMMMmmmm--                
##..                                        ..  --++mmmmMMMMmmMMMMMMMMMMMMmm++::++MMMMMMmm::  ------++++++mmMMMMMM++++::++mmMMMM@@@@MMMM@@MMmm++..              
##..                                          ..++++mmmmMMmmMMMMMMMMMMmmmm++::mmMMMMMMmm::..::++mm++mmMMmmmm@@@@MMMM++++++mmMMMMMM@@@@MMMMMMmm++::              
##..                                        ..++mmmmMMMMmmMMMMMMMMMMmmmmmmmmmmmmMMmm++++::::mmmmMMmmMM@@MMMM@@@@@@MMmm++++mmMMMMMM@@@@@@@@MMmm++--..            
##..                                        ::++mmmmMMmmmmmmmmMMmmmmMMmm++mmmmmm++::::++++mmmmmm@@MM@@@@@@@@@@@@@@MMMMMM++mmMMMM@@@@@@@@@@@@MMmm::--            
##..                                      ..++++mmMMmmmmMMMMMMMMMMMMmmmm++++++::::::--++mmmmMMMM@@@@@@@@@@@@@@@@@@@@MMMMmm++MMMMMM@@@@MMMM@@MMmm++--..          
##..                                      --++++mmmmmmMMMMMMMMMMMMMMMM++++::::----....::mmMMMMmm@@@@@@@@@@@@@@@@@@@@@@MMMMmmMMmmMM@@@@@@@@@@MMMMmm::--          
##..                                      ++++mmMMmmmmMMMMMMMMMMmmMM++::::------..  ..--::mmMMMMMM@@@@##@@@@@@@@@@@@@@MMMMmmmmMMMM@@@@@@@@MM@@MMmm::            
##..                                    ++mmmmmmmmMMMMMMMMMMMMmmmmmm++++--......    ..----mmmmMMMM@@@@@@@@@@@@@@@@@@@@@@MMmmmmMMMMMM@@@@@@@@@@@@MM++--          
##..                                  ::++mmmmmmMMMMMMMMMMMMmmmmmmmm::--  ..        ....--mm++mmMM@@@@@@@@@@@@@@@@@@MM@@mmmmmmmmMMMM@@@@@@@@@@MMMM++++          
##..                          --..----++mmmmmmMMMMMMMMMMMMmmmmmmmm++::              ....++++::++mmMM@@@@@@@@MM@@@@@@MMMMMM++++mmMM@@@@@@@@@@@@@@MMmm++--        
##..                        --++++::++++mmmmMMMMMMMMMMMMMMmmmmmmmm++..              ....++::::++mmmmMM@@@@@@MMMMMMMMMMMMmm++::++@@@@@@@@@@@@@@@@@@mm++::        
##..                      ..::::++::++++MMMMMMMMMMMMMMMMmmmmmmmm++--                  ..------::++mmmmMMMMMMmmmmMMMMmmmm++++++mm@@@@@@@@@@@@@@@@@@MM++::        
##..                      --::++--::mmmmMMMMMMMMMM@@@@MMmmmmmm++--                ......--  --::++++++MMMMmmmm++mmmmmmmm++++mmmm@@@@@@@@@@@@@@@@@@MM++++        
##..                      ::--++  ..++MMMMMMMMMM@@@@MMMMmmmm++--..                ..        ..::++++mmmmMM++++--++mmmmmm++++MM++@@########@@@@MMMMMMmm++--  ..  
##..                      --      --::mmMMMMMMMMMMMMMMmm++::--..                ..--    ..  ..::++++++++mm::::..::++++mm++++MMmm@@######@@@@@@@@MMMMmm++::      
##..                      ..        ..++MMmmmmMMMMMMmm++::----                ....--  ....    --::::::::++----  --::++++++++MMMM@@########@@@@@@MMMMmmmm::--    
##..                      ----      ..++mmmmmmMMMMMM::--..                    ..--    ..--  --::::------::----  --::::::++++MMMM@@############@@@@MMmmMM----    
##..                      --::  ------++mmmmMMMM@@mm....------::--..        ....--..  ..----::++::::----------..::::::++++++MMMM@@@@##########@@@@@@mmmm------  
##..                        --  ..    ::MMmmMMMMMM::        ..::mmmm::      ..--..    ..----++++++++--::::::::..::::++++++++@@MMMM############@@@@@@MMMM::....  
##..                        ..        ::mmMMMMMM@@..              ::mmMM::--..::      ..::::++mmmm++::mmmmmm++  ::++++MM++mm##mmMM##############@@@@MMMMmm--..  
##..                                  ++mmmmmmMM@@            ..    --++MM++::--      ..++::++MMmm++::mmmmmm++  ++mm++MMmmMM@@mmMM################@@@@@@MM++--..
##..                                --mm++mm++mmMM    ..mmMMmm@@mm++::..------          ++::++MMMMmm++MMMMmm++..++mmmmmmMM@@@@MM@@##################@@@@@@MM::..
##..                                ++::++::++mmmm      ++@@mm..::MMMM::..              ::++++MMMMMMmmMMMMMM::::MMMMmmmm@@##@@@@##################@@@@@@@@MMmm--
##..                            ....  --::::++mm++        --    ::++MMmm--              ::::mmMM@@@@MM@@@@MMmmMMMMmmMM@@####@@####################@@@@@@@@MMmm::
##..                                  --++--++MM::              ..mmmm  --              ::++mmMM@@##############@@@@@@##############################@@@@@@MMMMmm
##..                                  --    --mm::          --                          --::++@@################@@@@############################@@##@@@@@@@@@@MM
##..                                        ..mm++              ..                        ....++MM@@####@@@@MMmmmmMM################@@@@##########@@@@@@@@@@MMmm
##..                                          --::                                          ..--::++MM@@@@@@++++::::++mm@@@@################@@@@######@@@@@@MMmm
##..                                            ..                                          ----::++mmMM##@@@@##mm::++++mm@@################################@@MM
##..                                          ..                                          ......++  ..MM@@MM..MM####MM++mm##############@@@@##########@@####@@MM
##..                                            ..                                                    --::    --@@MM++--MM############@@MMMM@@####@@##@@@@####MM
##..                                                                                                          ::::    --##############@@mmMM######@@##MM####@@MM
##..                                                                                                  ....--::::      ++################@@@@##########@@######MM
##..                                                                                                                ..####################@@##########@@####@@mm
##..                                                                                                                ++##########@@####################@@####@@mm
##..                                                                                                              ..############@@##@@@@@@##########@@##@@##@@MM
##..                                                                                                              ++################@@@@@@@@####@@####@@@@@@@@MM
##..                                                                                                            ..@@########@@########@@MMMM@@@@@@@@MM@@@@@@MMMM
##..                                                                                                            mm########@@############@@@@@@@@@@@@mmMMMMMMMMmm
##..                                                                                                          --################################@@@@MMMMMMMM++mm
##..                                                                                                        --@@################################@@@@MMMM@@MMMMMM
##..                                                                                                      --MM######@@########################@@@@@@@@@@@@@@@@@@
##..                                                  ::::                        ....                  ::MM##################################@@####@@@@@@@@@@@@
##..                                                                                                ..::@@##MM@@##############################@@@@MMMM@@@@@@##MM
##..                                                              ..----..                        --++##############@@@@@@@@@@##################@@@@@@@@@@@@MMMM
##..                                                                ..      ..::::::--..      ..::MM################@@@@####@@##@@@@##########@@@@@@@@@@@@MMMMmm
##..                                                                  --          --::..  ..::MM##############@@######@@mmMM@@@@################@@####MMMM@@MMmm
##..                                                                      ------::::    --MM####@@@@##@@@@@@@@@@@@##############################@@@@@@++::::::MM
##..                                                                                  ::@@####@@@@@@##########@@##################################@@@@@@++--  ++
##..                                                                                ++@@##@@@@@@@@@@##########################################@@@@@@@@@@@@++..::
##..                                                                            ..mm@@@@@@@@@@MMMM@@##################################################@@@@MMmm++
##..                                                                    ..----++mmmm@@MMmmMM@@@@@@################################@@@@####@@@@##@@mmmm++mmmmMM--
##..                                                                    ..--::++mmMMmm::@@@@@@@@########@@@@####@@@@##############@@@@@@######::    ..--++::--mm
##..                                                                        ::++++MM++mmMMMMMM@@##################@@MM@@@@@@######@@@@##MM--            ----    
##..                                                                        ::++mmmmMMMM@@--MM@@####################MM@@@@@@@@@@@@@@@@++              --::    ..
##..                                                                    ..::++++mmmmMMmmmm--MM######@@##############@@MMMMMMMMMM@@MM..      --....--::--        
##..                                                                      --..::--mmmm++++..MM####@@################@@MM++++@@@@::++..                          
##..                                                                      --..--  mm::++++  MM##@@@@################@@MMMM@@##@@::....                          
##..                                                                      --++  ..++--::++  MM@@@@@@################@@@@######MM--..                            
##..                                                                    ..----  --++  ..++  MMMM@@################@@@@########mm                                
##..                                                                    ..--    ::--  ..++::mm@@############@@@@@@@@@@######@@MM..                              
##..                                                                    ..--    ::    ..++MMMM@@@@@@@@##@@@@@@@@@@MM@@@@@@@@MM++                                
##..                                                                      ..    ..  ..++mmMM@@MMMM##@@@@@@@@MMMM@@MMmmMMMMMMmm::                                
##..                                                                      ..  ..  --mmMMMMMMMMMM@@@@@@@@@@MMmmmm@@MMmmMMmmmmmm--                                
##..                                                                      ..  ::++mmmmmmmmmm@@@@MMmm@@@@@@mmMMmmMMMMMMMM++mmmm--                                
##..                                                                      ..::mmmmmmmmmmMMMM@@@@mmMM@@@@@@@@MM++@@@@MMmm++mmmm                                  
##..                                                                      --mmmm++mmMMMM@@@@@@@@mm@@@@@@MM@@MMmm@@@@MMMMmmMM::                                  
##..                                                                      ++mmmmmmMMMM@@@@@@@@MMMMMM@@MM##@@MM++MMMMMMMMMMMM..                                  
##..                                                                    --mmmmmmmmMMMMMMMM@@@@MM@@::MMmm@@@@MMmm@@MMMMMMMM++                                    
  `;

  botao.addEventListener("click", () => {
    asciiArea.textContent = arte;
    gallery.style.display = "flex";
    mensagem.style.display = "block";
    botao.disabled = true;
    botao.style.cursor = "not-allowed";
  });
});
