import {
  Button,
  Center,
  DarkMode,
  Flex,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react'
import QRCode from 'react-qr-code'

import React from 'react'
import { api } from '../api'

export default function Home() {
  const [qr, setQr] = React.useState('ca15aa02-299f-4357-a9f1-fe18d1d6d94b/12')
  const [pin, setPin] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const toast = useToast()

  const generatePin = async () => {
    setIsLoading(true)
    try {
      const response = await api.get(`pin/${qr}`)
      setPin(response.data.pin)
      setIsLoading(false)
      toast({
        position: 'top',
        title: 'Seu PIN foi gerado',
        description: 'E possui uma validade de 10 minutos a partir de agora!',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    } catch (error) {
      console.log('error')
      setIsLoading(false)
      toast({
        position: 'top',
        title: 'Ocorreu um erro!',
        description: 'Verifique o conteudo do QR Code!',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  return (
    <Center height="100vh">
      <Stack spacing="12" width="450px" align="center">
        <Heading>Restaurant Toten</Heading>
        <QRCode
          value={qr}
          bgColor="#171923"
          fgColor="#EDEEEE"
          title="Mesa 12"
        />
        <HStack width="256px" spacing="auto">
          <PinInput isDisabled value={pin} size="lg">
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Button
          colorScheme="cyan"
          w="256px"
          color="white"
          isLoading={isLoading}
          onClick={generatePin}
        >
          Gerar PIN
        </Button>
        <DarkMode>
          <Flex flexDir="column" width="100%">
            <Text fontSize="sm" align="center">
              Conteúdo do QR code:
            </Text>
            <Textarea
              variant="filled"
              placeholder="Conteúdo do QR code"
              value={qr}
              size="lg"
              onChange={(e) => setQr(e.target.value)}
            />
          </Flex>
        </DarkMode>
      </Stack>
    </Center>
  )
}
