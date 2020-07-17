import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}

        <h1>Guilherme Lellis</h1>
        <h2>@guilherme.lellis</h2>

        <p>
          Developer at <a href="">https://www.guilhermelellis.com.br</a>
          @GuilhermeLellis
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 13 de janeiro de 1993
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>

          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
