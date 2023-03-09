import React from 'react';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGoogle,
} from 'react-icons/fa';

import * as F from './FooterStyles';

export const Footer = () => {
    
    return (
        <F.Container>
            <F.Wrapper>
                <F.SocialMedia>
                    <F.SocialMediaWrap>
                        <F.SocialLogo >
                            <p>© 2022 Copyright: Seu Nome</p>
                            <span>Design by <a href="https://www.linkedin.com/in/leonanthomaz" >@leonanthomaz</a></span><br/>
                        </F.SocialLogo>

                        <F.SocialIcons>
                            <F.SocialIconLink href='mailto:@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem' target="_blank" aria-label='Google'>
                                <FaGoogle />
                            </F.SocialIconLink>

                            <F.SocialIconLink href='https://github.com/' target="_blank" aria-label='Github'>
                                <FaGithub />
                            </F.SocialIconLink>
                            
                            <F.SocialIconLink href='https://www.linkedin.com/in/' target="_blank" aria-label='Linkedin'>
                                <FaLinkedin />
                            </F.SocialIconLink>

                            <F.SocialIconLink
                                href='//www.twitter.com/'
                                
                                aria-label='Twitter'
                                rel='noopener noreferrer'
                            >
                                <FaTwitter />
                            </F.SocialIconLink>
                        </F.SocialIcons>

                    </F.SocialMediaWrap>
                </F.SocialMedia>
            </F.Wrapper>
            
        </F.Container>
    )
}
