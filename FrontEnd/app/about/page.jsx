import React from 'react';

function page() {
    return (
        <div>
            <header style={styles.header}>
                <h1 style={{ fontFamily: 'Almendra', fontSize: '30px', fontWeight: '400' }}>Meet The Team</h1>
            </header>

            <div style={styles.container}>
                <div style={styles.teamMember}>
                    <h2><b>Brandon Williams</b></h2>
                    <p>
                        - 1st Year Electrical Engineering Major
                    </p>
                </div>

                <div style={styles.teamMember}>
                    <h2><b>Sungwoo Min</b></h2>
                    <p>
                        - 4th Year Computer Science Major
                    </p>
                </div>
                <div style={styles.teamMember}>
                    <h2><b>Nathan Shih</b></h2>
                    <p>
                        - 1st Year Computer Engineering Major
                    </p>
                </div>
                <div style={styles.teamMember}>
                    <h2><b>Brian Hu</b></h2>
                    <p>
                        - 1st Year Computer Engineering Major
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    header: {
        backgroundImage: 'linear-gradient(rgb(0, 0, 0), rgb(75, 75, 75))',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    },
    container: {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '0 20px',
    },
    teamMember: {
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        fontSize: '24px'
    },
};

export default page;
