import { Container } from '@/pages/layouts/container';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
export function CheckOut() {
  return (
    <Container>
      <h1 className="text-center text-5xl underline">Carrinho</h1>
      <section className="flex md:flex-row  flex-col  justify-center items-center gap-x-4 mt-10">
        <div className="md:min-w-96 w-full h-96 border rounded-sm">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Produto</TableHead>
                <TableHead>Tamanho</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="md:w-80 w-full h-96 border rounded-sm"></div>
      </section>
    </Container>
  );
}
