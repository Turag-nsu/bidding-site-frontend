import React from 'react';
import { Link } from 'react-router-dom';

const BidderProfile = ({name, image, id}) => {
    const styles = {
        avatar: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        name: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginLeft: '10px',
        },
        avatarContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

        },
        
    }
    return (
        <Link to={`/profile/${id}`} style={styles.avatarContainer}>
            <img src={image} alt={name} style={styles.avatar} />
            <p style={styles.name}>{name}</p>
        </Link>
    );
};

export default BidderProfile;