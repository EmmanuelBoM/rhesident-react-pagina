import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/AdminLayout.css'

function AdminRecursos() {
    return (
        <main className='admin-main'>
            <AdminNavbar activeTab='recursos'></AdminNavbar>
        </main>
    );
}

export default AdminRecursos;
