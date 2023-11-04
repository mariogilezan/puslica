import { useEffect, useState } from 'react';
import { client } from '../../client';

import { CenovnikSection, Table } from './CenovnikStyles';

export default function Cenovnik() {
  const [cenovnikData, setCenovnikData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "proizvodi"] | order(red){
        _id,
        nazivProizvoda,
        mernaJedinica,
        cena
      }
    `
      )
      .then((data) => {
        setCenovnikData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CenovnikSection id='cenovnik'>
      <h2>Cenovnik</h2>
      <Table>
        <thead>
          <tr>
            <th>Proizvod</th>
            <th>Količina</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Torta</td>
            <td>Kg</td>
            <td>1000.00 Din</td>
          </tr>
          <tr>
            <td>Kolači</td>
            <td>Kg</td>
            <td>700.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          <tr>
            <td>Kiflice</td>
            <td>Kg</td>
            <td>500.00 Din</td>
          </tr>
          {cenovnikData &&
            cenovnikData.map((proizvod) => (
              <tr key={proizvod._id}>
                <td>{proizvod.nazivProizvoda}</td>
                <td>{proizvod.mernaJedinica}</td>
                <td>{proizvod.cena}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </CenovnikSection>
  );
}
