import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";

export const PdfPlanes = ({ image }) => {
  const urlImage = `/assets/planes/${image}.png`;
  return (
    <>
      <Document>
        <Page size="A4">
          <View>
            <Image src={urlImage} />
          </View>
        </Page>
      </Document>
    </>
  );
};
