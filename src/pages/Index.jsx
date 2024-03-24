// Complete the Index page component here
// Use chakra-ui
import { Button, VStack, Box, HStack, Select, RadioGroup, Stack, Radio, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  // TODO: Create the website here!
  return (
    <VStack align="stretch" spacing={4}>
      <Box>
        <HStack spacing={4}>
          <VStack align="stretch" spacing={2}>
            <Select placeholder="Select X-axis"></Select>
            <RadioGroup>
              <Stack direction="row">
                <Radio value="date">Date</Radio>
                <Radio value="number">Number</Radio>
              </Stack>
            </RadioGroup>
            <Select placeholder="Select Y-axis"></Select>
          </VStack>
          <Box flexGrow={1}></Box>
        </HStack>
        <VStack align="stretch" spacing={2} mt={4}>
          <Text>Chart Summary:</Text>
          <Text>Start of X-axis: ...</Text>
          <Text>End of X-axis: ...</Text>
          <Text>Average value of Y-axis: ...</Text>
          <Text>Standard deviation of Y-axis: ...</Text>
        </VStack>
      </Box>
    </VStack>
  ); // example
};

export default Index;
