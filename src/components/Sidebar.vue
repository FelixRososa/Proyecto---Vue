<template>
    <div class="sidebar">
        <h2>Barra Lateral</h2>
        <ul>
        <li><Router-link to="/contador">Contador</Router-link></li>
        <li><Router-link to="/lista-de-tareas">Lista De Tareas</Router-link></li>
        <li><Router-link to="/registrar">Registrar</Router-link></li>
        </ul>
    </div>
</template>
<script setup>

</script>
<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>