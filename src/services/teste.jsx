import React from 'react';

// Funções
export function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Impossível dividir por zero!";
    }
}

// Componente que contém as funções
function FuncoesPage() {
    return (
        <div>
            <h2>Funções</h2>
            <p>Esta página contém as funções:</p>
            <ul>
                <li>Somar</li>
                <li>Subtrair</li>
                <li>Multiplicar</li>
                <li>Dividir</li>
            </ul>
        </div>
    );
}

export default FuncoesPage;
