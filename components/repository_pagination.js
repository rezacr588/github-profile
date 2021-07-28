import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, ButtonGroup, IconButton, Spinner } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { useGithubContext } from "../context";
import Loading from "./loading";

export default function RepositoryPagination() {
  const { state: { repositories: { total_count }, profile: { login } } } = useGithubContext();
  const [loading , setLoading] = useState(false)
  const router = useRouter()
  let { query : { page } } = router
  page = parseInt(page)
  const pageLength = Math.floor(total_count / 6) + 1
  const pages = [...Array(pageLength).keys(pageLength)]
  const showPages = (id) => {
    if (id < 5) return pages.slice(0, 6)
    if (id === pageLength) return pages.slice(id - 6, id)
    return pages.slice(id - 3, id + 3).concat(pages.slice(id + 3, id + 4))
  }
  useEffect(() => {
    setLoading(false)
  },[page])
  const [state, setState] = useState(showPages(page ? page - 1 : 0))
  console.log(state)
  const handlePagination = (pageId) => {
    setLoading(true)
    setState(pre => showPages(pageId))
    router.push(
      {
        query: {
          username: login,
          page: pageId + 1
        }
      }
    )
  }
  return (
    <ButtonGroup
        size="md"
        isAttached
        variant="outline"
      >
      <IconButton
        onClick={() => handlePagination(page - 2)}
        icon={<ChevronLeftIcon />}
        isDisabled={
          page ?
            page === 1
            : true
        }
      />
      {
        state.map(
          (pageId) =>
            <Button
              key={pageId}
              onClick={() => handlePagination(pageId)}
              isActive={
                page ?
                  pageId + 1 === page :
                  (pageId + 1) === 1
                }
            >
              {pageId + 1}
            </Button>
        )
      }
      <IconButton
        onClick={() => handlePagination(page ? page : 1)}
        icon={<ChevronRightIcon />}
        isDisabled={
          page ?
            page === pageLength
            : false
        }
      />
      <Loading loading={loading} />
    </ButtonGroup>
  )
}