import { Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Flex align="center" justify="center" w="100vw" h="100vh">
      <Stack spacing="4" align="center" justify="center">
        <Heading size="2xl" mb="8" w="100%" textAlign="center">
          Boilerplate NextJs e ChakraUi
        </Heading>
        <Text>Pra você nunca mais sofrer com CSS na vida!</Text>

        <Flex flexDir={{ base: 'column', lg: 'row' }}>
          <Flex
            w="350px"
            h={{ lg: '250px', base: 'fit-content' }}
            bg="gray.800"
            borderRadius="10"
            p="4"
            mr={{ base: '0', lg: '8' }}
            mb="8"
          >
            <Stack align="center" justify="center" spacing="8" w="100%">
              <Heading textAlign="center" size="lg">
                Documentação do Nextjs
              </Heading>
              <Link href="https://nextjs.org/docs/getting-started" isExternal>
                <Button colorScheme="red">Clica aqui! 😎</Button>
              </Link>
            </Stack>
          </Flex>

          <Flex
            w="350px"
            h={{ lg: '250px', base: 'fit-content' }}
            bg="gray.800"
            borderRadius="10"
            p="4"
          >
            <Stack align="center" justify="center" spacing="8" w="100%">
              <Heading textAlign="center" size="lg">
                Documentação do ChakraUi
              </Heading>
              <Link
                href="https://chakra-ui.com/docs/getting-started"
                isExternal
              >
                <Button colorScheme="red">Nesse botão aqui! ✌</Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>

        <Text>
          Feito com ❤ por{' '}
          <Link href="https://www.linkedin.com/in/matheusfpires/" isExternal>
            Matheus Pires
          </Link>
        </Text>
      </Stack>
    </Flex>
  )
}
