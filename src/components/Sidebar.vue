<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <h3>Email:{{ registrarStore.email }}</h3>
        <ul>
        <li><Router-link to="/contador">Contador</Router-link></li>
        <li><Router-link to="/lista-de-tareas">Lista De Tareas</Router-link></li>
        <li><Router-link to="/registrar">Registrar</Router-link></li>
        </ul>
    </div>
</template>
<script setup>
import { useRegistrarStore } from '@/Modules/registro/stores/registrarStore';

const registrarStore = useRegistrarStore();


</script>
<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>