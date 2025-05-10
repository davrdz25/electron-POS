import styles from "../Styles/CustomTable.module.css";

type TCustomTable = {
    headers: string[],
    data: any[]
}

const CustomTable = ({headers, data}: TCustomTable) => {

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headers.map((header) => (
                             <th className={styles.headerCell}>{header}</th>

                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.entry} className={styles.tableRow}>
                            <td className={styles.cell}>1</td>
                            <td className={styles.cell}>Pantalon</td>
                            <td className={styles.cell}>{row.material}</td>
                            <td className={styles.cell}>{row.color}</td>
                            <td className={styles.cell}>{row.tone}</td>
                            <td className={styles.cell}>{row.price}</td>
                            <td className={styles.cell}>{row.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
