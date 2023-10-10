import { Box, Flex, Image } from "@chakra-ui/react";
import BtnBlue from "../../../../Components/Button/BtnBlue";
import Footerpropone from "../../../../Components/Footer/Footerpropone";
import Footerpropthree from "../../../../Components/Footer/Footerpropthree";
import FooterProptwo from "../../../../Components/Footer/FooterProptwo";

export default function Footer() {
   const footlinkone =[
    {
        id:"1",
        links:"Work With Us"
    },
    {
        id:"2",
        links:"Advertise With Us"
    },
    {
        id:"3",
        links:"Support Us"
    },
    {
        id:"4",
        links:"Business Advices"
    }
   ]

   const footlinktwo = [
    {
        id:"1",
        links:"Private Coach"
    },
    {
        id:"2",
        links:"Our Work"
    },
    {
        id:"3",
        links:"Our Commitment"
    },
    {
        id:"4",
        links:"Our Team"
    }
   ]

   const footlinkthree = [
    {
        id:"1",
        links:"About"
    },
    {
        id:"2",
        links:"FAQs"
    },
    {
        id:"3",
        links:"Report a Bug"
    }
   ]

  return (
    <Box mt={"10rem"} pb={"2rem"}>
      <Flex flexDir={{base:"column",md:"column", lg:"row"}} justifyContent={"space-between"}>
         <Box>
            <Flex flexDir={"column"} gap={12}>
               <Box>
                 <Image 
                  alt={"logo"}
                  src={"/Logo.svg"}
                  objectFit={"contain"}
                 />
               </Box>

               <Box>
                <Flex  justifyContent={{base:"none",  md:"space-around", lg:"space-around"}} gap={{base:13, md:0, lg:0}}>
                    <Box>
                        <Image 
                          alt={"Instagram"}
                          src={"/IG.svg"}
                        />
                    </Box>
                    <Box>
                        <Image 
                          alt={"Twitter"}
                          src={"/Twitter.svg"}
                        />
                    </Box>
                    <Box>
                        <Image 
                          alt={"facebook"}
                          src={"/FB.svg"}
                        />
                    </Box>
                </Flex>
               </Box>

               <Box display={{base:"block", md:"grid", lg:"grid"}} mb={{base:"1rem",  md:".3rem", lg:".3rem"}} placeItems={"center"}>
                 <BtnBlue btnType="Contact Us" />
               </Box>
            </Flex>
         </Box>

         <Box>
           <Flex flexDir={{base:"column",md:"column", lg:"row"}} gap={65}>
             <Box>
                <Footerpropone propLink={footlinkone} />
             </Box>
             <Box>
                <FooterProptwo propLink={footlinktwo} />
             </Box>
             <Box>
                <Footerpropthree propLink={footlinkthree} />
             </Box>
           </Flex>
         </Box>
      </Flex>
    </Box>
  )
}
