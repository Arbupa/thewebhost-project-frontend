import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";

// DE ESTA MANERA FUNCIONA EL DE DESCARGAR PDF
// Create Document Component
export const PdfDocumentInternal = ({ data }) => {
  // const [newData, setNewData] = useState([]);
  console.log("La data es:", data);
  return (
    <Document>
      <Page size="A4">
        <View style={{ alignItems: "center" }}>
          <Text>Lista de sugerencias internas</Text>
          <br />
          {data
            ? data.map((elem, i) => (
                <Text key={elem.id + i}>
                  User ID: {elem.userID} - Sugerencia: {elem.suggestion}
                </Text>
              ))
            : ""}
          {/* <Text>Section #1</Text>
          <Text>Section #2</Text>
          <Image
            src="/assets/clients/ibm.png"
            alt="test image"
            style={{ width: "90%", height: "80%" }}
          />
          <Text>Section #3</Text> */}
        </View>
      </Page>
    </Document>
  );
};
