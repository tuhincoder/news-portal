import { getCategoryList } from "@/utils/getCategoryList";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoryList = async () => {
    const { data: allCategoryList } = await getCategoryList()
    console.log('all category list', allCategoryList);
    return (
        <Box className="mt-5 bg-gray-200 px-4 py-3">
            <Typography>categories</Typography>
            <Divider />
            <Stack rowGap={1}>
                {
                    allCategoryList.map((category) => (
                        <Button variant="outlined" key={category.id}>

                            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
                        </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;