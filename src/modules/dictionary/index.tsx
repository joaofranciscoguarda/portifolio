import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Fonts from "./fonts";
import Colors from "./colors";

export function Dictionary() {
    return (
        <Tabs defaultValue="fonts" class="w-full h-full">
            <TabsList>
                <TabsTrigger value="fonts">Fonts</TabsTrigger>
                <TabsTrigger value="colors">Colors</TabsTrigger>
            </TabsList>
            <TabsContent value="fonts">
                <Fonts />
            </TabsContent>
            <TabsContent value="colors">
                <Colors />
            </TabsContent>
        </Tabs>
    );
}

export default Dictionary;
