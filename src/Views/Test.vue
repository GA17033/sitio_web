
<template>
    
</template>
<script>
import { jsPDF } from "jspdf";

export default{
    methods:{
        generatePDF(){
            const doc = new jsPDF();
            doc.text("Hello world!", 10, 10);
            doc.save("a4.pdf");
        }
    }
}


</script>
