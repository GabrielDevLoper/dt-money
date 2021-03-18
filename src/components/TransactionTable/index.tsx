import { Container } from "./styles";


export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de websites</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Mensalidade carro</td>
                        <td className="withdraw">- R$800,00</td>
                        <td>Automóvel</td>
                        <td>20/02/2021</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    );
}