import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name='description'
                          content='Silkroad Latino es un grupo de servidores privados de silkroad online, el cual es administrado por administradores de habla hispana. Sus comienzos fueron en sro-latino.com (Foro de ayuda de silkroad).'
                    />
                    <meta name="keywords"
                          content="Silkroad latino, sro, isro, srl, silkroad, latino, private server, server privado, sro latino, silkroad privado"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument